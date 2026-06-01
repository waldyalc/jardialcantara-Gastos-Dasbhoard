# AGENTS.md

Guide for any agent working on this project.

## Project

This project is a personal expenses dashboard for Jardi Alcantara. It is meant to record, analyze, and forecast personal spending in Dominican pesos (`RD$`). The current app is static and lives in this folder:

`C:\Users\wardy\OneDrive\Desktop\Gastos Jardi Y Wardy Alcantara`

This folder is now a Git repository. The production branch is `main` and the current remote is:

`https://github.com/waldyalc/jardialcantara-Gastos-Dasbhoard.git`

Treat changes carefully because other Codex threads may leave a dirty worktree.

## Previous Chat Context

The user asked to create a copy/adaptation of a "personal expenses" dashboard seen in a video and in a previous folder called `Dashboard contabilidad Gpt`. The goal is not a business CFO dashboard, but a personal dashboard for Jardi/Jardy Alcantara.

Decisions already made:

- Main currency: `RD$`, Dominican peso formatting.
- Future real data source: Supabase.
- Temporary login: username `admin`, password `admin`, while Google login is being configured.
- Expected final login: Supabase Auth with Google.
- The app should be in Spanish. A previous active thread was working on translating and improving the design.
- Desired design: clear, financial, usable, non-generic, readable on desktop and mobile.
- Charts must be functional, with hover/tooltips, not decorative only.
- Future goal: turn card notification emails received through Gmail into pending expenses that are categorized and reviewed before entering the dashboard. This is explicitly not included in the current deploy unless the user asks for that feature again.

## Current Structure

Main files:

- `index.html`: login screen, dashboard structure, modals, charts, and tables.
- `styles.css`: dark visual theme, responsive layout, panels, tables, charts, and modals.
- `script.js`: app state, temporary auth, Supabase connection, demo data, calculations, chart rendering, filters, modals, and persistence.
- `supabase-schema.sql`: minimal Supabase schema with tables, indexes, RLS, and an `updated_at` trigger.
- `config.example.js`: frontend configuration template.
- `config.js`: real local configuration. It may contain the Supabase URL and publishable key.
- `.png` screenshots: visual QA evidence and dashboard states.
- `.agents/skills`: local skills useful for this workspace. Most of this folder is ignored by Git, but selected project skills may be force-added when the user asks to share them in the repo.

There is no `package.json`; the app uses CDNs from `index.html`:

- Lucide icons
- Supabase JS v2
- Google Fonts

## Data Model

Supabase tables defined in `supabase-schema.sql`:

- `expense_categories`
  - Per-user categories with `name`, `slug`, `color`, `sort_order`, and `is_active`.
- `expenses`
  - Expenses with date, merchant, description, amount, category, account/card, and notes.
- `monthly_projections`
  - Monthly budget/projection by category.
- Existing future tables for email imports may appear in `supabase-schema.sql`, but the deployed frontend must not expose Gmail, email sync, or a "Gastos por revisar" inbox until the user explicitly asks to ship that feature.

All tables must have RLS enabled. The base rule is: each user can only see and modify rows where `user_id = auth.uid()`.

Important: in a previous chat, Supabase was responding, but the remote tables may not have existed yet (`404` on endpoints such as `expense_categories`). Before assuming "the app is broken", verify whether the SQL has been applied in Supabase.

## Auth And Security

The app has two modes:

- Temporary local mode: `admin/admin`, storing session and data in `localStorage`.
- Supabase mode: uses `window.APP_CONFIG`, password auth when configured, Google OAuth, and `supabase.auth.getSession()`.

Security rules:

- Never put `service_role`, `sb_secret_...`, private connection strings, or Gmail tokens in frontend code.
- `config.js` may only use `supabaseUrl` and `supabaseAnonKey` / `sb_publishable_...`.
- If a `service_role` appears in chats or files, warn that it should be rotated.
- Gmail importers, cron jobs, and email parsing must live in a secure backend, preferably Supabase Edge Functions.
- Current production deploy should not include Gmail/email import UI, frontend Gmail calls, or Supabase Edge Function invocations such as `gmail-sync`.
- Do not disable RLS as a quick fix for reads/writes.

## Current App Flow

Startup:

1. `DOMContentLoaded` calls `init()`.
2. `configureSupabase()` reads `window.APP_CONFIG`.
3. If `?demo=1`, demo mode loads.
4. If a temporary session exists in `localStorage`, temporary admin mode loads.
5. If Supabase and a real session exist, the app verifies any configured allowed emails and loads real data.
6. Otherwise, the login screen is shown.

Data:

- `ensureDefaults()` creates categories and projections in Supabase when the user has no defaults.
- In demo mode, data is seeded locally. In temporary admin mode, the app starts from an empty local dashboard and persists in `localStorage`.
- Charts and tables recalculate from `app.expenses`, `app.categories`, and `app.projections`.

## Key Functions In `script.js`

- `configureSupabase()`: connects Supabase from `config.js`.
- `loginWithPassword()`: validates `admin/admin`.
- `loginWithGoogle()`: starts Supabase Google OAuth when configured.
- `logout()`: signs out from temporary/demo mode or Supabase.
- `loadApp()`: loads real data from Supabase.
- `ensureDefaults()`: seeds defaults for new users.
- `renderDashboard()`: recalculates metrics and calls renderers.
- `renderTrajectory()`: monthly cumulative spending chart vs projection.
- `updateTrajectoryHover()`: tooltip/hover behavior for the main chart.
- `renderSixMonthChart()`: six-month spending evolution by category.
- `saveProjections()`: saves the monthly budget.
- `saveExpense()`: creates an expense in temporary mode or Supabase.
- `seedEmptyData()`: initializes the temporary admin dashboard with categories and zero projections.

## Design And UX

Keep the product as a real tool, not a landing page.

User preferences:

- All visible app text should be in Spanish.
- The interface should be clear at a glance, without requiring too much reading.
- Use icons where they help.
- The dashboard should feel financial and metric-driven.
- The design should be simple, elegant, and more polished than a basic mockup.
- Review desktop/mobile screenshots when changing UI.

Practical guidelines:

- Do not put cards inside cards.
- Avoid text overlap, especially on mobile.
- Tables should scroll inside their own container, not break the global page width.
- Keep stable dimensions for charts, buttons, tables, and modals.
- Use `lucide` icons if available.
- If new visible text is added, write it in Spanish.

## Future: Gmail To Expenses

Recommended architecture from the previous chat:

- Google OAuth to connect Gmail per user.
- Minimum scope: `gmail.readonly`.
- Supabase Edge Functions:
  - `gmail-auth-start`
  - `gmail-auth-callback`
  - `gmail-sync`
- Supabase scheduled functions/cron every 5-15 minutes as the first version.
- Do not use Gmail push/PubSub in V1 unless the user asks for it; it adds complexity and `watch` renewal requirements.

Recommended future tables:

- `email_imports`
  - `user_id`, `gmail_message_id`, `sender`, `subject`, `received_at`, `raw_snippet`, `parsed_json`, `status`, `created_at`.
  - Unique by `user_id + gmail_message_id`.
- `pending_expenses`
  - `spent_at`, `merchant`, `amount`, `payment_account`, `suggested_category_id`, `confidence`, `source_email_id`, `review_status`.

Future UX:

- Add a "Gastos por revisar" or "Inbox de tarjeta" view.
- Each imported expense should be accepted, edited, or dismissed.
- Do not insert email-derived expenses directly into the dashboard without review, at least in V1.
- Until this feature is requested again, do not add email-derived metrics, demo pending rows, Gmail buttons, or frontend calls to `gmail-sync`.

## Relevant Local Skills

The `.agents/skills` folder contains useful skills. Use the smallest relevant set for the task:

- `frontend-design`: when changing UI or design.
- `taste-skill`: when the user asks to improve design or avoid a generic look.
- `webapp-testing`: for Playwright QA/screenshots.
- `accessibility`: when accessibility is requested or when making large interaction changes.
- `supabase-db` and `supabase-postgres-best-practices`: for SQL, RLS, indexes, or migrations.
- `project-agent-guide`: when creating or improving `AGENTS.md` or another portable guide for future agents/models.
- `nextjs-*`: not relevant unless the app is migrated to Next.js.
- `localhost`: mostly applies to Next/Medoxigas ERP projects; this app can be served as static files with Python or another simple server.

## How To Test

There is no build step:

1. Serve the folder with a static server.
   - Example: `py -3 -m http.server 8001`
2. Open:
   - `http://127.0.0.1:8001/`
   - `http://127.0.0.1:8001/?demo=1`
3. Test temporary login:
   - username: `admin`
   - password: `admin`
4. Check the browser console.
5. Verify:
   - login/logout
   - period filters
   - expense creation
   - projections modal
   - main chart hover
   - six-month chart hover
   - mobile layout without global horizontal scroll

For automated QA, previous work used Playwright with local Chrome from Codex bundled dependencies when the integrated Browser was unavailable.

## Change Rules

- Inspect the current state before editing; another active thread may be working in parallel.
- Do not overwrite `config.js` without user permission.
- If adding credentials, confirm they are publishable/anon and not secret.
- Do not stage untracked screenshots or helper scripts unless they are part of the requested deploy.
- Keep changes small and verifiable.
- If touching UI, test desktop and mobile.
- If touching Supabase, test RLS and signed-out users.
- If changing visible app text, use Spanish.
- Do not convert the app to a framework without a strong reason or explicit instruction.
- Do not delete screenshots or generated files unless the user asks.

## Known Pending State

- Confirm whether `supabase-schema.sql` has been applied to the real Supabase project.
- Finish or verify the complete Spanish translation in `index.html` and `script.js`.
- Configure Google Auth in Supabase if replacing `admin/admin`.
- Design and implement the future review inbox for expenses imported from Gmail only when the user explicitly asks to ship email import.
- Rotate any `service_role` key that was shared in chats.
