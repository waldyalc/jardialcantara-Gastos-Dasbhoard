create extension if not exists pgcrypto;

create schema if not exists private;

revoke all on schema private from anon;
revoke all on schema private from authenticated;
grant usage on schema private to service_role;

create table if not exists public.expense_categories (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  slug text not null,
  color text not null default '#ffc640',
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, slug)
);

create table if not exists public.expenses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  spent_at date not null,
  merchant text not null,
  description text,
  amount numeric(12, 2) not null check (amount >= 0),
  category_id uuid references public.expense_categories(id) on delete set null,
  payment_account text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.monthly_projections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  month date not null,
  category_id uuid not null references public.expense_categories(id) on delete cascade,
  projected_amount numeric(12, 2) not null default 0 check (projected_amount >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, month, category_id)
);

create table if not exists private.gmail_connections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  gmail_email text,
  oauth_access_token text,
  oauth_refresh_token text,
  token_type text,
  scope text,
  access_token_expires_at timestamptz,
  gmail_history_id text,
  sync_status text not null default 'disconnected'
    check (sync_status in ('disconnected', 'connected', 'syncing', 'error')),
  last_sync_at timestamptz,
  last_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.email_imports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  gmail_connection_id uuid references private.gmail_connections(id) on delete set null,
  gmail_message_id text not null,
  gmail_thread_id text,
  gmail_history_id text,
  sender text,
  recipient text,
  subject text,
  received_at timestamptz,
  raw_snippet text,
  raw_headers jsonb not null default '{}'::jsonb,
  parsed_json jsonb not null default '{}'::jsonb,
  status text not null default 'new'
    check (status in ('new', 'parsed', 'pending', 'ignored', 'error')),
  error_message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, gmail_message_id)
);

create table if not exists public.pending_expenses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  email_import_id uuid references public.email_imports(id) on delete set null,
  spent_at date,
  merchant text not null default '',
  description text,
  amount numeric(12, 2) check (amount is null or amount >= 0),
  currency text not null default 'DOP',
  suggested_category_id uuid references public.expense_categories(id) on delete set null,
  payment_account text,
  card_last4 text,
  confidence numeric(5, 4) not null default 0 check (confidence >= 0 and confidence <= 1),
  parsed_json jsonb not null default '{}'::jsonb,
  review_status text not null default 'pending'
    check (review_status in ('pending', 'accepted', 'dismissed')),
  accepted_expense_id uuid unique references public.expenses(id) on delete set null,
  reviewed_at timestamptz,
  reviewed_by uuid references auth.users(id) on delete set null,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.merchant_category_rules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  merchant_pattern text not null,
  category_id uuid references public.expense_categories(id) on delete set null,
  payment_account text,
  match_count integer not null default 0 check (match_count >= 0),
  last_matched_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists expense_categories_user_idx
  on public.expense_categories(user_id, sort_order);

create index if not exists expenses_user_spent_idx
  on public.expenses(user_id, spent_at desc);

create index if not exists expenses_category_idx
  on public.expenses(category_id);

create index if not exists projections_user_month_idx
  on public.monthly_projections(user_id, month);

create index if not exists gmail_connections_user_idx
  on private.gmail_connections(user_id);

create index if not exists email_imports_user_received_idx
  on public.email_imports(user_id, received_at desc);

create index if not exists email_imports_status_idx
  on public.email_imports(user_id, status);

create index if not exists pending_expenses_user_status_idx
  on public.pending_expenses(user_id, review_status, created_at desc);

create index if not exists pending_expenses_email_idx
  on public.pending_expenses(email_import_id);

create unique index if not exists merchant_category_rules_user_pattern_idx
  on public.merchant_category_rules(user_id, lower(merchant_pattern));

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists expense_categories_updated_at on public.expense_categories;
create trigger expense_categories_updated_at
before update on public.expense_categories
for each row execute function public.set_updated_at();

drop trigger if exists expenses_updated_at on public.expenses;
create trigger expenses_updated_at
before update on public.expenses
for each row execute function public.set_updated_at();

drop trigger if exists monthly_projections_updated_at on public.monthly_projections;
create trigger monthly_projections_updated_at
before update on public.monthly_projections
for each row execute function public.set_updated_at();

drop trigger if exists gmail_connections_updated_at on private.gmail_connections;
create trigger gmail_connections_updated_at
before update on private.gmail_connections
for each row execute function public.set_updated_at();

drop trigger if exists email_imports_updated_at on public.email_imports;
create trigger email_imports_updated_at
before update on public.email_imports
for each row execute function public.set_updated_at();

drop trigger if exists pending_expenses_updated_at on public.pending_expenses;
create trigger pending_expenses_updated_at
before update on public.pending_expenses
for each row execute function public.set_updated_at();

drop trigger if exists merchant_category_rules_updated_at on public.merchant_category_rules;
create trigger merchant_category_rules_updated_at
before update on public.merchant_category_rules
for each row execute function public.set_updated_at();

alter table public.expense_categories enable row level security;
alter table public.expenses enable row level security;
alter table public.monthly_projections enable row level security;
alter table public.email_imports enable row level security;
alter table public.pending_expenses enable row level security;
alter table public.merchant_category_rules enable row level security;
alter table private.gmail_connections enable row level security;

drop policy if exists "Users can read their categories" on public.expense_categories;
create policy "Users can read their categories"
on public.expense_categories for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can insert their categories" on public.expense_categories;
create policy "Users can insert their categories"
on public.expense_categories for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "Users can update their categories" on public.expense_categories;
create policy "Users can update their categories"
on public.expense_categories for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "Users can delete their categories" on public.expense_categories;
create policy "Users can delete their categories"
on public.expense_categories for delete
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can read their expenses" on public.expenses;
create policy "Users can read their expenses"
on public.expenses for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can insert their expenses" on public.expenses;
create policy "Users can insert their expenses"
on public.expenses for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "Users can update their expenses" on public.expenses;
create policy "Users can update their expenses"
on public.expenses for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "Users can delete their expenses" on public.expenses;
create policy "Users can delete their expenses"
on public.expenses for delete
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can read their projections" on public.monthly_projections;
create policy "Users can read their projections"
on public.monthly_projections for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can insert their projections" on public.monthly_projections;
create policy "Users can insert their projections"
on public.monthly_projections for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "Users can update their projections" on public.monthly_projections;
create policy "Users can update their projections"
on public.monthly_projections for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "Users can delete their projections" on public.monthly_projections;
create policy "Users can delete their projections"
on public.monthly_projections for delete
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can read their email imports" on public.email_imports;
create policy "Users can read their email imports"
on public.email_imports for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can insert their email imports" on public.email_imports;
create policy "Users can insert their email imports"
on public.email_imports for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "Users can update their email imports" on public.email_imports;
create policy "Users can update their email imports"
on public.email_imports for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "Users can delete their email imports" on public.email_imports;
create policy "Users can delete their email imports"
on public.email_imports for delete
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can read their pending expenses" on public.pending_expenses;
create policy "Users can read their pending expenses"
on public.pending_expenses for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can insert their pending expenses" on public.pending_expenses;
create policy "Users can insert their pending expenses"
on public.pending_expenses for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "Users can update their pending expenses" on public.pending_expenses;
create policy "Users can update their pending expenses"
on public.pending_expenses for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "Users can delete their pending expenses" on public.pending_expenses;
create policy "Users can delete their pending expenses"
on public.pending_expenses for delete
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can read their merchant rules" on public.merchant_category_rules;
create policy "Users can read their merchant rules"
on public.merchant_category_rules for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "Users can insert their merchant rules" on public.merchant_category_rules;
create policy "Users can insert their merchant rules"
on public.merchant_category_rules for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "Users can update their merchant rules" on public.merchant_category_rules;
create policy "Users can update their merchant rules"
on public.merchant_category_rules for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "Users can delete their merchant rules" on public.merchant_category_rules;
create policy "Users can delete their merchant rules"
on public.merchant_category_rules for delete
to authenticated
using (user_id = auth.uid());

grant usage on schema public to anon, authenticated, service_role;

grant select, insert, update, delete on public.expense_categories to authenticated;
grant select, insert, update, delete on public.expenses to authenticated;
grant select, insert, update, delete on public.monthly_projections to authenticated;
grant select, insert, update, delete on public.email_imports to authenticated;
grant select, insert, update, delete on public.pending_expenses to authenticated;
grant select, insert, update, delete on public.merchant_category_rules to authenticated;

grant all on public.expense_categories to service_role;
grant all on public.expenses to service_role;
grant all on public.monthly_projections to service_role;
grant all on public.email_imports to service_role;
grant all on public.pending_expenses to service_role;
grant all on public.merchant_category_rules to service_role;
grant all on private.gmail_connections to service_role;
