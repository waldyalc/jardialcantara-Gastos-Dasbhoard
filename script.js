const DEFAULT_CATEGORIES = [
  { name: "Alquiler", slug: "rent", color: "#2f80ed", sort_order: 5, projected_amount: 0 },
  { name: "Combustible Wardy", slug: "fuel-wardy", color: "#f2994a", sort_order: 6, projected_amount: 0 },
  { name: "Combustible Jardi", slug: "fuel-jardi", color: "#eb5757", sort_order: 7, projected_amount: 0 },
  { name: "Compra Alimentos Supermercado", slug: "food", color: "#ffc640", sort_order: 10, projected_amount: 250000 },
  { name: "Comida Rápida", slug: "fast-food", color: "#ffaa00", sort_order: 11, projected_amount: 0 },
  { name: "Restaurante", slug: "restaurant", color: "#ff6b35", sort_order: 12, projected_amount: 0 },
  { name: "Viajes y alojamiento", slug: "travel-accommodation", color: "#28c987", sort_order: 20, projected_amount: 500000 },
  { name: "Viaje/Visita Familiares", slug: "family-travel", color: "#1db87a", sort_order: 21, projected_amount: 0 },
  { name: "Alojamiento Hoteles y Resorts", slug: "hotels-resorts", color: "#0fa3b1", sort_order: 22, projected_amount: 0 },
  { name: "Entretenimiento", slug: "entertainment", color: "#9c5cff", sort_order: 30, projected_amount: 60000 },
  { name: "Amazon y compras online", slug: "amazon-online-shopping", color: "#ff834d", sort_order: 40, projected_amount: 80000 },
  { name: "Salud y rendimiento", slug: "health-performance", color: "#4487ff", sort_order: 50, projected_amount: 140000 },
  { name: "Coaching", slug: "coaching", color: "#f66aa0", sort_order: 60, projected_amount: 0 },
  { name: "Comisiones cambiarias", slug: "exchange-fees", color: "#27c6d8", sort_order: 70, projected_amount: 15000 },
  { name: "Gastos familiares", slug: "family-expenses", color: "#7bd88f", sort_order: 80, projected_amount: 100000 },
  { name: "Aporte Mensual a Mamá", slug: "mom-support", color: "#f48fb1", sort_order: 85, projected_amount: 0 },
  { name: "Personal", slug: "personal", color: "#c78bff", sort_order: 90, projected_amount: 0 },
  { name: "Pago de Préstamos", slug: "loan-payments", color: "#e53935", sort_order: 95, projected_amount: 0 },
  { name: "Pagos de Suscripciones", slug: "subscriptions", color: "#8e24aa", sort_order: 96, projected_amount: 0 },
  { name: "Otros", slug: "others-misc", color: "#98a2b3", sort_order: 100, projected_amount: 70000 },
  { name: "Sin categoría", slug: "uncategorized", color: "#596273", sort_order: 110, projected_amount: 0 }
];

const DEMO_EXPENSES = [
  ["Compra Alimentos Supermercado", "2026-05-02", "Supermercado Nacional", "Compra semanal", 18750, "Visa Jardi", "Compra semanal"],
  ["Compra Alimentos Supermercado", "2026-05-06", "Cafe Santo Domingo", "Desayuno de trabajo", 3400, "Visa Jardi", ""],
  ["Compra Alimentos Supermercado", "2026-05-14", "La Cassina", "Cena", 11500, "Mastercard", ""],
  ["Viajes y alojamiento", "2026-05-08", "Airbnb", "Estadía de fin de semana", 46200, "Mastercard", ""],
  ["Viajes y alojamiento", "2026-05-20", "Uber", "Transporte", 8200, "Visa Jardi", ""],
  ["Entretenimiento", "2026-05-12", "Caribbean Cinemas", "Cine", 3600, "Visa Jardi", ""],
  ["Amazon y compras online", "2026-05-10", "Amazon", "ArtÃ­culos del hogar", 17350, "Mastercard", ""],
  ["Salud y rendimiento", "2026-05-04", "Gym Pro", "MembresÃ­a mensual", 9500, "Visa Jardi", ""],
  ["Salud y rendimiento", "2026-05-18", "Farmacia Carol", "Suplementos", 7100, "Efectivo", ""],
  ["Comisiones cambiarias", "2026-05-22", "Banco FX", "ComisiÃ³n por cambio", 1850, "Banco", ""],
  ["Gastos familiares", "2026-05-24", "Apoyo familiar", "Gasto familiar", 25000, "Banco", ""],
  ["Otros", "2026-05-27", "Proveedor varios", "Gasto imprevisto", 4300, "Efectivo", ""],
  ["Sin categoría", "2026-05-29", "Comercio sin identificar", "Revisar clasificación", 2800, "Visa Jardi", "Clasificar después"]
];

const CATEGORY_LABELS = {
  rent: "Alquiler",
  "fuel-wardy": "Combustible Wardy",
  "fuel-jardi": "Combustible Jardi",
  food: "Compra Alimentos Supermercado",
  "fast-food": "Comida Rápida",
  restaurant: "Restaurante",
  "travel-accommodation": "Viajes y alojamiento",
  "family-travel": "Viaje/Visita Familiares",
  "hotels-resorts": "Alojamiento Hoteles y Resorts",
  entertainment: "Entretenimiento",
  "amazon-online-shopping": "Amazon y compras online",
  "health-performance": "Salud y rendimiento",
  coaching: "Coaching",
  "exchange-fees": "Comisiones cambiarias",
  "family-expenses": "Gastos familiares",
  "mom-support": "Aporte Mensual a Mamá",
  personal: "Personal",
  "loan-payments": "Pago de Préstamos",
  subscriptions: "Pagos de Suscripciones",
  "others-misc": "Otros",
  uncategorized: "Sin categoría"
};

const CATEGORY_NAME_FALLBACKS = {
  Rent: "Alquiler",
  "Fuel Wardy": "Combustible Wardy",
  "Fuel Jardi": "Combustible Jardi",
  Food: "Compra Alimentos Supermercado",
  "Travel & Accommodation": "Viajes y alojamiento",
  Entertainment: "Entretenimiento",
  "Amazon & Online Shopping": "Amazon y compras online",
  "Health & Performance": "Salud y rendimiento",
  "Exchange fees": "Comisiones cambiarias",
  "Family Expenses": "Gastos familiares",
  "Others (Misc)": "Otros",
  Uncategorized: "Sin categoría"
};

const DEFAULT_INCOME_CATEGORIES = [
  { slug: "salary",           name: "Ingreso por Salario",                          color: "#4487ff", icon: "briefcase" },
  { slug: "rental-house-apt", name: "Ingreso por Alquiler de Casa y Apartamento",   color: "#28c987", icon: "home" },
  { slug: "rental-commercial",name: "Ingreso por Alquiler del Local Comercial (La Ferretería)", color: "#ffc640", icon: "store" },
  { slug: "per-diem",         name: "Ingreso por Viático",                          color: "#27c6d8", icon: "car" },
  { slug: "special-bonus",    name: "Ingreso por Bono Especial",                    color: "#f66aa0", icon: "gift" },
  { slug: "professional-fees",name: "Ingreso por Honorarios Profesionales",         color: "#9c5cff", icon: "award" },
  { slug: "book-royalty",     name: "Regalía de Libro",                             color: "#ff834d", icon: "book-open" },
  { slug: "other-income",     name: "Otros Ingresos",                               color: "#98a2b3", icon: "plus-circle" }
];

const TEMP_AUTH_KEY = "jardi_temp_admin_login_v2";
const TEMP_DATA_KEY = "jardi_temp_admin_empty_data_v2";
const TEMP_CREDENTIALS = {
  username: "admin",
  password: "admin"
};
const LOGIN_EMAIL_ALIASES = {
  "jardialcantaraspc@gmaill.com": "jardialcantaraspc@gmail.com"
};
const EXTRA_GOOGLE_EMAILS = ["wardyalcantaragiraldo@gmail.com"];

const app = {
  supabase: null,
  session: null,
  demoMode: false,
  localAuth: false,
  supabaseUnavailable: false,
  period: "thisMonth",
  selectedCategory: "all",
  search: "",
  customStart: "",
  customEnd: "",
  projectionMonth: monthKey(new Date()),
  categories: [],
  expenses: [],
  projections: [],
  incomeProjections: [],
  incomeMonth: monthKey(new Date()),
  trajectoryMeta: null,
  sixMonthMeta: null
};

const rdMoney = new Intl.NumberFormat("es-DO", {
  style: "currency",
  currency: "DOP",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const compactNumber = new Intl.NumberFormat("es-DO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const compactDecimal = new Intl.NumberFormat("es-DO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

document.addEventListener("DOMContentLoaded", init);

async function init() {
  configureSupabase();
  bindEvents();
  refreshIcons();

  if (new URLSearchParams(window.location.search).get("demo") === "1") {
    loadDemo();
    return;
  }

  if (localStorage.getItem(TEMP_AUTH_KEY) === "1") {
    loadTemporaryAdminSession();
    return;
  }

  if (!app.supabase) {
    showAuth();
    return;
  }

  const { data } = await app.supabase.auth.getSession();
  app.session = data.session;
  app.supabase.auth.onAuthStateChange(async (_event, session) => {
    app.session = session;
    if (session) {
      if (await ensureAllowedSession(session)) loadApp();
    }
    else showAuth();
  });

  if (app.session) {
    if (await ensureAllowedSession(app.session)) await loadApp();
  } else {
    showAuth();
  }
}

function configureSupabase() {
  const config = window.APP_CONFIG || {};
  const missing = !config.supabaseUrl || !config.supabaseAnonKey || config.supabaseUrl.includes("YOUR_PROJECT_REF");
  const setupWarning = document.getElementById("setup-warning");
  if (setupWarning) setupWarning.classList.add("hidden");

  if (!missing && window.supabase) {
    app.supabase = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
  }

  document.getElementById("sync-copy").textContent = app.supabase
    ? `Cuenta de Supabase sincronizada para ${config.ownerName || "Jardi Alcantara"}.`
    : "Vista demo. Agrega config.js para conectar Supabase.";
}

function bindEvents() {
  document.getElementById("password-login").addEventListener("submit", loginWithPassword);
  document.getElementById("google-login").addEventListener("click", loginWithGoogle);
  document.getElementById("demo-preview").addEventListener("click", loadDemo);
  document.getElementById("toggle-password").addEventListener("click", togglePasswordVisibility);
  document.getElementById("logout").addEventListener("click", logout);
  document.getElementById("sync-now").addEventListener("click", () => loadApp(true));
  document.getElementById("add-expense").addEventListener("click", openExpenseModal);

  document.getElementById("period-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-period]");
    if (!button) return;
    app.period = button.dataset.period;
    document.querySelectorAll("[data-period]").forEach((item) => item.classList.toggle("active", item === button));
    document.getElementById("custom-range").classList.toggle("hidden", app.period !== "custom");
    renderDashboard();
  });

  document.getElementById("apply-custom").addEventListener("click", () => {
    app.customStart = document.getElementById("custom-start").value;
    app.customEnd = document.getElementById("custom-end").value;
    renderDashboard();
  });

  document.getElementById("open-projections").addEventListener("click", openProjectionModal);
  document.getElementById("close-projections").addEventListener("click", closeProjectionModal);
  document.getElementById("cancel-projections").addEventListener("click", closeProjectionModal);
  document.getElementById("projection-modal").addEventListener("click", (event) => {
    if (event.target.id === "projection-modal") closeProjectionModal();
  });
  document.getElementById("projection-month").addEventListener("change", (event) => {
    app.projectionMonth = event.target.value || monthKey(new Date());
    renderProjectionForm();
  });
  document.getElementById("projection-form").addEventListener("input", handleProjectionAmountInput);
  document.getElementById("save-projections").addEventListener("click", saveProjections);

  document.getElementById("open-income").addEventListener("click", openIncomeModal);
  document.getElementById("open-income-2").addEventListener("click", openIncomeModal);
  document.getElementById("close-income").addEventListener("click", closeIncomeModal);
  document.getElementById("cancel-income").addEventListener("click", closeIncomeModal);
  document.getElementById("income-modal").addEventListener("click", (event) => {
    if (event.target.id === "income-modal") closeIncomeModal();
  });
  document.getElementById("income-month").addEventListener("change", (event) => {
    app.incomeMonth = event.target.value || monthKey(new Date());
    renderIncomeForm();
  });
  document.getElementById("income-form").addEventListener("input", handleIncomeAmountInput);
  document.getElementById("save-income").addEventListener("click", saveIncomeProjections);

  document.getElementById("close-expense").addEventListener("click", closeExpenseModal);
  document.getElementById("cancel-expense").addEventListener("click", closeExpenseModal);
  document.getElementById("expense-modal").addEventListener("click", (event) => {
    if (event.target.id === "expense-modal") closeExpenseModal();
  });
  document.getElementById("expense-form").addEventListener("submit", saveExpense);

  document.getElementById("category-legend").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-filter]");
    if (!button) return;
    setCategoryFilter(button.dataset.categoryFilter);
  });
  document.getElementById("category-table-body").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-filter]");
    if (!button) return;
    setCategoryFilter(button.dataset.categoryFilter);
  });
  document.getElementById("category-pills").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-filter]");
    if (!button) return;
    setCategoryFilter(button.dataset.categoryFilter);
  });
  document.querySelector("[data-category-filter='all']").addEventListener("click", () => setCategoryFilter("all"));
  document.getElementById("transaction-search").addEventListener("input", (event) => {
    app.search = event.target.value.trim().toLowerCase();
    renderTransactions();
  });

  document.getElementById("trajectory-chart").addEventListener("pointermove", updateTrajectoryHover);
  document.getElementById("trajectory-chart").addEventListener("pointerleave", hideTrajectoryHover);
  document.getElementById("trajectory-chart").addEventListener("click", pinTrajectoryDay);
  document.getElementById("six-month-chart").addEventListener("pointermove", updateSixMonthHover);
  document.getElementById("six-month-chart").addEventListener("pointerleave", hideSixMonthHover);
}

async function loginWithPassword(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const username = normalizeLoginEmail(data.username);
  const password = String(data.password || "");

  if (username === TEMP_CREDENTIALS.username && password === TEMP_CREDENTIALS.password) {
    localStorage.setItem(TEMP_AUTH_KEY, "1");
    loadTemporaryAdminSession();
    showToast("SesiÃ³n iniciada.");
    return;
  }

  if (app.supabase && username.includes("@")) {
    const { data: authData, error } = await app.supabase.auth.signInWithPassword({
      email: username,
      password
    });

    if (error) {
      showToast("Usuario o contraseÃ±a incorrectos.");
      form.elements.password.select();
      return;
    }

    app.session = authData.session;
    if (app.session && await ensureAllowedSession(app.session)) {
      await loadApp();
      showToast("SesiÃ³n iniciada.");
    }
    return;
  }

  showToast("Usuario o contraseÃ±a incorrectos.");
  form.elements.password.select();
}

function normalizeLoginEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  return LOGIN_EMAIL_ALIASES[email] || email;
}

function togglePasswordVisibility() {
  const input = document.getElementById("temp-password");
  const button = document.getElementById("toggle-password");
  const isHidden = input.type === "password";
  input.type = isHidden ? "text" : "password";
  button.setAttribute("aria-label", isHidden ? "Ocultar contraseÃ±a" : "Mostrar contraseÃ±a");
  button.innerHTML = `<i data-lucide="${isHidden ? "eye-off" : "eye"}"></i>`;
  refreshIcons();
}

async function loginWithGoogle() {
  if (!app.supabase) {
    showToast("Agrega config.js con las credenciales de Supabase antes de iniciar con Google.");
    return;
  }
  const { error } = await app.supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: window.location.href.split("#")[0] }
  });
  if (error) showToast(error.message);
}

function isAllowedEmail(email) {
  const allowedEmails = getAuthorizedEmails();
  const normalizedEmail = String(email || "").trim().toLowerCase();
  return !allowedEmails.length || allowedEmails.includes(normalizedEmail);
}

async function ensureAllowedSession(session) {
  if (isAllowedEmail(session?.user?.email)) return true;

  showToast("Esta cuenta de Google no tiene acceso al dashboard.");
  if (app.supabase) await app.supabase.auth.signOut();
  app.session = null;
  showAuth();
  return false;
}

function getAuthorizedEmails() {
  const config = window.APP_CONFIG || {};
  const configuredEmails = [
    config.allowedEmail,
    ...(Array.isArray(config.allowedEmails) ? config.allowedEmails : [])
  ];

  const normalizedConfiguredEmails = configuredEmails
    .map((email) => String(email || "").trim().toLowerCase())
    .filter(Boolean);

  if (!normalizedConfiguredEmails.length) return [];

  return [...new Set([...normalizedConfiguredEmails, ...EXTRA_GOOGLE_EMAILS])];
}

async function logout() {
  if (app.demoMode || app.localAuth || !app.supabase) {
    if (app.localAuth) localStorage.removeItem(TEMP_AUTH_KEY);
    app.demoMode = false;
    app.localAuth = false;
    app.supabaseUnavailable = false;
    app.session = null;
    showAuth();
    return;
  }
  app.supabaseUnavailable = false;
  await app.supabase.auth.signOut();
}

function showAuth() {
  document.getElementById("auth-screen").classList.remove("hidden");
  document.getElementById("dashboard").classList.add("hidden");
  refreshIcons();
}

function showDashboard() {
  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  refreshIcons();
}

async function loadApp(manual = false) {
  if (app.demoMode) {
    renderDashboard();
    if (manual) showToast(app.localAuth ? "Datos temporales actualizados." : "Datos demo actualizados.");
    return;
  }
  if (!app.supabase || !app.session?.user?.id) {
    showAuth();
    return;
  }

  try {
    await ensureDefaults();
    const [categories, expenses, projections, incomeProjections] = await Promise.all([
      app.supabase.from("expense_categories").select("*").eq("is_active", true).order("sort_order"),
      app.supabase.from("expenses").select("*, expense_categories(name, slug, color)").order("spent_at", { ascending: false }),
      app.supabase.from("monthly_projections").select("*"),
      app.supabase.from("monthly_income_projections").select("*")
    ]);

    if (categories.error) throw categories.error;
    if (expenses.error) throw expenses.error;
    if (projections.error) throw projections.error;

    app.categories = categories.data || [];
    app.expenses = normalizeExpenses(expenses.data || []);
    app.projections = projections.data || [];
    app.incomeProjections = (incomeProjections.data || []);
    populateExpenseCategorySelect();
    app.supabaseUnavailable = false;
    showDashboard();
    renderDashboard();
    if (manual) showToast("Sincronizado con Supabase.");
  } catch (error) {
    console.error(error);
    if (isMissingSupabaseTable(error)) {
      loadEmptySupabaseFallback(error);
      return;
    }
    showToast(error.message || "No se pudieron cargar los datos de Supabase.");
  }
}

function isMissingSupabaseTable(error) {
  const text = `${error?.code || ""} ${error?.message || ""} ${error?.details || ""}`.toLowerCase();
  return error?.code === "PGRST205" || error?.code === "42P01" || text.includes("could not find the table") || text.includes("does not exist");
}

function loadEmptySupabaseFallback(error) {
  app.demoMode = false;
  app.localAuth = false;
  app.supabaseUnavailable = true;
  seedEmptyData(app.session?.user?.id || "supabase-user");
  document.getElementById("sync-copy").textContent = "SesiÃ³n iniciada. Falta aplicar el esquema de Supabase; por ahora ves el tablero en cero.";
  populateExpenseCategorySelect();
  showDashboard();
  renderDashboard();
  showToast("Entraste al tablero en cero. Falta aplicar supabase-schema.sql.");
  console.warn("Supabase schema missing:", error);
}

async function ensureDefaults() {
  const userId = app.session.user.id;
  const { data: existingCategories, error: catError } = await app.supabase
    .from("expense_categories")
    .select("id, slug")
    .limit(1);
  if (catError) throw catError;

  if (!existingCategories.length) {
    const { error } = await app.supabase.from("expense_categories").insert(
      DEFAULT_CATEGORIES.map(({ projected_amount, ...category }) => ({ ...category, user_id: userId }))
    );
    if (error) throw error;
  }

  const { data: categories, error: categoriesError } = await app.supabase
    .from("expense_categories")
    .select("*")
    .order("sort_order");
  if (categoriesError) throw categoriesError;

  const currentMonth = `${monthKey(new Date())}-01`;
  const { data: existingProjections, error: projectionError } = await app.supabase
    .from("monthly_projections")
    .select("id")
    .eq("month", currentMonth)
    .limit(1);
  if (projectionError) throw projectionError;

  if (!existingProjections.length) {
    const rows = categories.map((category) => {
      return {
        user_id: userId,
        month: currentMonth,
        category_id: category.id,
        projected_amount: 0
      };
    });
    const { error } = await app.supabase.from("monthly_projections").insert(rows);
    if (error) throw error;
  }
}

function loadDemo() {
  app.demoMode = true;
  app.localAuth = false;
  app.supabaseUnavailable = false;
  app.session = null;
  seedDemoData("demo-user");
  document.getElementById("sync-copy").textContent = "Vista demo. Los cambios se reinician al salir.";
  populateExpenseCategorySelect();
  showDashboard();
  renderDashboard();
}

function loadTemporaryAdminSession() {
  app.demoMode = true;
  app.localAuth = true;
  app.supabaseUnavailable = false;
  app.session = { user: { id: "temp-admin" } };

  if (!restoreTemporaryData()) {
    seedEmptyData("temp-admin");
    persistTemporaryData();
  } else if (syncDefaultCategories("temp-admin")) {
    persistTemporaryData();
  }

  document.getElementById("sync-copy").textContent = "SesiÃ³n temporal de Jardi Alcantara. Los datos se guardan en este navegador.";
  populateExpenseCategorySelect();
  showDashboard();
  renderDashboard();
}

function seedDemoData(userId) {
  app.categories = DEFAULT_CATEGORIES.map(({ projected_amount, ...category }, index) => ({
    ...category,
    id: `cat-${index}`,
    user_id: userId
  }));
  app.projections = app.categories.map((category) => ({
    id: `proj-${category.id}`,
    user_id: userId,
    month: `${monthKey(new Date())}-01`,
    category_id: category.id,
    projected_amount: DEFAULT_CATEGORIES.find((item) => item.slug === category.slug)?.projected_amount || 0
  }));
  const byName = new Map(app.categories.flatMap((category) => [[category.name, category], [categoryLabel(category), category]]));
  app.expenses = buildDemoExpenseRows(byName, userId).map((row, index) => ({
    ...row,
    id: `expense-${index}`,
    category: app.categories.find((category) => category.id === row.category_id)
  }));
}

function seedEmptyData(userId) {
  app.categories = DEFAULT_CATEGORIES.map(({ projected_amount, ...category }) => ({
    ...category,
    id: `empty-${category.slug}`,
    user_id: userId
  }));
  app.projections = app.categories.map((category) => ({
    id: `empty-proj-${category.slug}`,
    user_id: userId,
    month: `${monthKey(new Date())}-01`,
    category_id: category.id,
    projected_amount: 0
  }));
  app.expenses = [];
}

function restoreTemporaryData() {
  try {
    const data = JSON.parse(localStorage.getItem(TEMP_DATA_KEY) || "null");
    if (!data || !Array.isArray(data.categories) || !Array.isArray(data.expenses) || !Array.isArray(data.projections)) {
      return false;
    }
    app.categories = data.categories;
    app.expenses = data.expenses;
    app.projections = data.projections;
    return true;
  } catch (_error) {
    return false;
  }
}

function syncDefaultCategories(userId) {
  let changed = false;
  const existingSlugs = new Set(app.categories.map((category) => category.slug));
  const existingProjectionKeys = new Set(app.projections.map((projection) => `${projection.month}:${projection.category_id}`));
  const month = `${monthKey(new Date())}-01`;

  DEFAULT_CATEGORIES.forEach(({ projected_amount, ...category }) => {
    if (existingSlugs.has(category.slug)) return;

    const id = `cat-${category.slug}`;
    app.categories.push({ ...category, id, user_id: userId });
    const projectionKey = `${month}:${id}`;

    if (!existingProjectionKeys.has(projectionKey)) {
      app.projections.push({
        id: `proj-${id}`,
        user_id: userId,
        month,
        category_id: id,
        projected_amount: 0
      });
    }

    changed = true;
  });

  if (changed) {
    app.categories.sort((a, b) => a.sort_order - b.sort_order);
  }

  return changed;
}

function persistTemporaryData() {
  if (!app.localAuth) return;
  localStorage.setItem(TEMP_DATA_KEY, JSON.stringify({
    categories: app.categories,
    expenses: app.expenses,
    projections: app.projections
  }));
}

function normalizeExpenses(rows) {
  const categoryById = new Map(app.categories.map((category) => [category.id, category]));
  return rows.map((row) => ({
    ...row,
    amount: Number(row.amount),
    category: row.expense_categories || categoryById.get(row.category_id) || categoryById.get(row.category_id)
  }));
}

function categoryLabel(category) {
  if (!category) return "Sin categoría";
  return CATEGORY_LABELS[category.slug] || CATEGORY_NAME_FALLBACKS[category.name] || category.name || "Sin categoría";
}

function renderDashboard() {
  const range = getPeriodRange(app.period);
  const periodExpenses = filterByRange(app.expenses, range.start, range.end);
  const monthRange = getMonthRange(parseMonth(app.projectionMonth));
  const monthExpenses = filterByRange(app.expenses, monthRange.start, monthRange.end);
  const total = sum(periodExpenses, "amount");
  const monthTotal = sum(monthExpenses, "amount");
  const projected = getMonthProjectionTotal(app.projectionMonth);
  const usedPercent = projected ? Math.round((monthTotal / projected) * 100) : 0;
  const forecast = calculateForecast(monthTotal, projected);

  const incomeTotal = getMonthIncomeTotal(app.projectionMonth);
  const balance = incomeTotal - monthTotal;

  document.getElementById("outflow-total").textContent = money(total);
  document.getElementById("projection-used").textContent = `${usedPercent}%`;
  document.getElementById("projection-copy").textContent = `${money(monthTotal)} de ${money(projected)} este mes`;
  document.getElementById("income-total").textContent = money(incomeTotal);
  document.getElementById("income-copy").textContent = incomeTotal > 0 ? `${DEFAULT_INCOME_CATEGORIES.filter(c => getIncomeAmount(c.slug, app.projectionMonth) > 0).length} fuente(s) este mes` : "Sin ingresos definidos";
  document.getElementById("balance-total").textContent = money(Math.abs(balance));
  document.getElementById("balance-total").style.color = balance >= 0 ? "var(--green)" : "var(--red)";
  document.getElementById("balance-copy").textContent = balance >= 0 ? `Superávit de ${money(balance)}` : `Déficit de ${money(Math.abs(balance))}`;
  document.getElementById("mtd-spent").textContent = money(monthTotal);
  document.getElementById("pace-copy").textContent = forecast.delta >= 0
    ? `${money(forecast.delta)} por debajo del ritmo`
    : `${money(Math.abs(forecast.delta))} por encima del ritmo`;
  document.getElementById("forecast-total").textContent = money(forecast.forecast);
  document.getElementById("forecast-copy").textContent = forecast.remaining >= 0
    ? `${money(forecast.remaining)} por debajo del lÃ­mite`
    : `${money(Math.abs(forecast.remaining))} por encima del lÃ­mite`;
  document.getElementById("donut-total").textContent = compactMoney(monthTotal);
  document.getElementById("trajectory-subtitle").textContent = `Gasto acumulado de ${labelForMonth(app.projectionMonth)} vs. presupuesto mensual.`;
  document.getElementById("category-table-title").textContent = `${periodLabel(app.period)} por categorÃ­a`;

  renderTrajectory(monthExpenses, projected);
  renderDonut(monthExpenses);
  renderSixMonthChart();
  renderCategoryTable(periodExpenses, range);
  renderCategoryPills();
  renderTransactions();
  renderIncomePanel();
  refreshIcons();
}

function renderTrajectory(monthExpenses, projected) {
  const svg = document.getElementById("trajectory-chart");
  hideTrajectoryHover();
  const monthDate = parseMonth(app.projectionMonth);
  const days = daysInMonth(monthDate);
  const daily = Array(days).fill(0);
  monthExpenses.forEach((expense) => {
    const day = new Date(`${expense.spent_at}T00:00:00`).getDate();
    daily[day - 1] += Number(expense.amount);
  });
  const cumulative = daily.reduce((acc, value, index) => {
    acc.push((acc[index - 1] || 0) + value);
    return acc;
  }, []);
  const pace = daily.map((_value, index) => projected / days * (index + 1));
  const max = Math.max(projected, ...cumulative, ...pace, 1) * 1.16;
  const isCompact = svg.clientWidth > 0 && svg.clientWidth < 700;
  const width = isCompact ? 720 : 1200;
  const height = 390;
  const pad = isCompact
    ? { left: 58, right: 18, top: 18, bottom: 42 }
    : { left: 70, right: 36, top: 18, bottom: 42 };
  const axisFont = isCompact ? 16 : 13;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  const x = (index) => pad.left + (index / Math.max(1, days - 1)) * (width - pad.left - pad.right);
  const y = (value) => height - pad.bottom - (value / max) * (height - pad.top - pad.bottom);
  const line = (values) => values.map((value, index) => `${index === 0 ? "M" : "L"} ${x(index).toFixed(2)} ${y(value).toFixed(2)}`).join(" ");
  const area = `${line(cumulative)} L ${x(days - 1)} ${height - pad.bottom} L ${x(0)} ${height - pad.bottom} Z`;
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  app.trajectoryMeta = { width, height, pad, days, daily, cumulative, pace, max, projected, month: app.projectionMonth };

  svg.innerHTML = `
    <defs>
      <linearGradient id="spendFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffc640" stop-opacity=".24" />
        <stop offset="100%" stop-color="#ffc640" stop-opacity=".02" />
      </linearGradient>
    </defs>
    ${ticks.map((tick) => {
      const value = max * tick;
      const yy = y(value);
      return `<line x1="${pad.left}" x2="${width - pad.right}" y1="${yy}" y2="${yy}" stroke="rgba(255,255,255,.06)" />
        <text x="8" y="${yy + 4}" fill="#858c99" font-size="${axisFont}">${isCompact ? compactMoney(value) : money(value)}</text>`;
    }).join("")}
    ${daily.map((value, index) => {
      const barHeight = Math.max(value ? 4 : 0, (value / max) * (height - pad.top - pad.bottom));
      const barWidth = Math.max(7, (width - pad.left - pad.right) / days * 0.42);
      return `<rect x="${x(index) - barWidth / 2}" y="${height - pad.bottom - barHeight}" width="${barWidth}" height="${barHeight}" rx="3" fill="${value > projected / days ? "#f25563" : "#27c987"}" opacity=".65" />`;
    }).join("")}
    <path d="${area}" fill="url(#spendFill)" />
    <path d="${line(pace)}" fill="none" stroke="#9aa2af" stroke-width="2" stroke-dasharray="6 7" opacity=".78" />
    <path d="${line(cumulative)}" fill="none" stroke="#ffc640" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    <g id="trajectory-hover-layer" class="hover-layer" style="display:none">
      <rect id="trajectory-hover-band" x="${x(0) - 14}" y="${pad.top}" width="28" height="${height - pad.top - pad.bottom}" rx="6" fill="rgba(255,255,255,.035)" />
      <line id="trajectory-hover-line" x1="${x(0)}" x2="${x(0)}" y1="${pad.top}" y2="${height - pad.bottom}" stroke="rgba(255,255,255,.55)" stroke-width="1.5" />
      <circle id="trajectory-hover-actual" cx="${x(0)}" cy="${y(cumulative[0])}" r="7" fill="#151922" stroke="#ffc640" stroke-width="4" />
      <circle id="trajectory-hover-pace" cx="${x(0)}" cy="${y(pace[0])}" r="5" fill="#151922" stroke="#9aa2af" stroke-width="3" />
    </g>
    ${[1, 5, 10, 15, 20, 25, days].filter((day, index, arr) => day <= days && arr.indexOf(day) === index).map((day) => `<text x="${x(day - 1)}" y="${height - 12}" fill="#858c99" font-size="${axisFont}">${day}</text>`).join("")}
  `;
}

function updateTrajectoryHover(event) {
  if (!app.trajectoryMeta) return;
  const svg = document.getElementById("trajectory-chart");
  const tooltip = document.getElementById("trajectory-tooltip");
  const rect = svg.getBoundingClientRect();
  const { width, height, pad, days, daily, cumulative, pace, max } = app.trajectoryMeta;
  const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
  const index = Math.min(days - 1, Math.max(0, Math.round(ratio * (days - 1))));
  const x = pad.left + (index / Math.max(1, days - 1)) * (width - pad.left - pad.right);
  const y = (value) => height - pad.bottom - (value / max) * (height - pad.top - pad.bottom);
  const actual = cumulative[index] || 0;
  const target = pace[index] || 0;
  const delta = target - actual;
  const dailyTarget = app.trajectoryMeta.projected / days;

  document.getElementById("trajectory-hover-layer").style.display = "block";
  document.getElementById("trajectory-hover-band").setAttribute("x", x - 14);
  document.getElementById("trajectory-hover-line").setAttribute("x1", x);
  document.getElementById("trajectory-hover-line").setAttribute("x2", x);
  document.getElementById("trajectory-hover-actual").setAttribute("cx", x);
  document.getElementById("trajectory-hover-actual").setAttribute("cy", y(actual));
  document.getElementById("trajectory-hover-pace").setAttribute("cx", x);
  document.getElementById("trajectory-hover-pace").setAttribute("cy", y(target));

  tooltip.classList.add("show");
  tooltip.setAttribute("aria-hidden", "false");
  tooltip.innerHTML = `
    <strong>DÃ­a ${index + 1} - ${labelForMonth(app.trajectoryMeta.month)}</strong>
    <span>Real: ${money(actual)}</span>
    <span>Ritmo esperado: ${money(target)}</span>
    <span>Gasto del dÃ­a: ${money(daily[index] || 0)}</span>
    <span class="${delta >= 0 ? "positive" : "negative"}">${money(Math.abs(delta))} ${delta >= 0 ? "por debajo del ritmo" : "por encima del ritmo"}</span>
    <small>${daily[index] > dailyTarget ? "El dÃ­a quedÃ³ por encima del objetivo." : "El dÃ­a quedÃ³ dentro del objetivo."}</small>
  `;
  const left = (x / width) * rect.width;
  const top = (Math.min(y(actual), y(target)) / height) * rect.height;
  tooltip.style.left = `${Math.min(rect.width - 236, Math.max(8, left + 12))}px`;
  tooltip.style.top = `${Math.max(8, top - 116)}px`;
}

function hideTrajectoryHover() {
  document.getElementById("trajectory-hover-layer")?.setAttribute("style", "display:none");
  const tooltip = document.getElementById("trajectory-tooltip");
  if (!tooltip) return;
  tooltip.classList.remove("show");
  tooltip.setAttribute("aria-hidden", "true");
}

function pinTrajectoryDay(event) {
  updateTrajectoryHover(event);
  const meta = app.trajectoryMeta;
  if (!meta) return;
  const rect = document.getElementById("trajectory-chart").getBoundingClientRect();
  const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
  const day = Math.min(meta.days, Math.max(1, Math.round(ratio * (meta.days - 1)) + 1));
  showToast(`DÃ­a ${day}: ${money(meta.daily[day - 1] || 0)} gastados.`);
}

function renderDonut(monthExpenses) {
  const totals = totalsByCategory(monthExpenses);
  const total = Array.from(totals.values()).reduce((acc, item) => acc + item.spent, 0);
  let cursor = 0;
  const stops = [];
  app.categories.forEach((category) => {
    const spent = totals.get(category.id)?.spent || 0;
    if (!spent || !total) return;
    const start = cursor;
    cursor += spent / total * 360;
    stops.push(`${category.color} ${start.toFixed(2)}deg ${cursor.toFixed(2)}deg`);
  });
  document.getElementById("category-donut").style.background = stops.length
    ? `conic-gradient(${stops.join(", ")})`
    : "conic-gradient(#252b36 0deg 360deg)";

  const sorted = app.categories
    .map((category) => ({ category, spent: totals.get(category.id)?.spent || 0 }))
    .filter((row) => row.spent > 0)
    .sort((a, b) => b.spent - a.spent);

  document.getElementById("category-legend").innerHTML = sorted.map(({ category, spent }) => {
    const percent = total ? Math.round((spent / total) * 100) : 0;
    return `
      <div class="legend-row">
        <button data-category-filter="${category.id}"><i class="swatch" style="background:${category.color}"></i>${categoryLabel(category)}</button>
        <strong>${money(spent)}</strong>
        <span>${percent}%</span>
      </div>
    `;
  }).join("") || `<p>No hay gastos registrados este mes.</p>`;
}

function renderSixMonthChart() {
  const svg = document.getElementById("six-month-chart");
  hideSixMonthHover();
  const months = getLastMonths(6);
  const topCategories = getTopCategoriesForMonths(months, 7);
  const isCompact = svg.clientWidth > 0 && svg.clientWidth < 700;
  const width = isCompact ? 720 : 900;
  const height = 340;
  const pad = isCompact
    ? { left: 58, right: 18, top: 16, bottom: 42 }
    : { left: 70, right: 24, top: 16, bottom: 40 };
  const axisFont = isCompact ? 14 : 12;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  const values = new Map();
  let max = 1;

  topCategories.forEach((category) => {
    const series = months.map((month) => {
      const range = getMonthRange(parseMonth(month));
      const total = sum(filterByRange(app.expenses, range.start, range.end).filter((expense) => expense.category_id === category.id), "amount");
      max = Math.max(max, total);
      return total;
    });
    values.set(category.id, series);
  });

  max *= 1.25;
  const x = (index) => pad.left + (index / Math.max(1, months.length - 1)) * (width - pad.left - pad.right);
  const y = (value) => height - pad.bottom - (value / max) * (height - pad.top - pad.bottom);
  const line = (series) => series.map((value, index) => `${index === 0 ? "M" : "L"} ${x(index).toFixed(2)} ${y(value).toFixed(2)}`).join(" ");

  app.sixMonthMeta = { width, height, pad, months, topCategories, values, max };

  svg.innerHTML = `
    ${[0, 0.25, 0.5, 0.75, 1].map((tick) => {
      const value = max * tick;
      const yy = y(value);
      return `<line x1="${pad.left}" x2="${width - pad.right}" y1="${yy}" y2="${yy}" stroke="rgba(255,255,255,.06)" />
        <text x="10" y="${yy + 4}" fill="#858c99" font-size="${axisFont}">${isCompact ? compactMoney(value) : money(value)}</text>`;
    }).join("")}
    ${topCategories.map((category) => `<path d="${line(values.get(category.id))}" fill="none" stroke="${category.color}" stroke-width="3" opacity=".9" stroke-linecap="round" stroke-linejoin="round" />
      ${values.get(category.id).map((value, index) => `<circle cx="${x(index)}" cy="${y(value)}" r="4" fill="${category.color}" />`).join("")}`).join("")}
    <g id="six-month-hover-layer" class="hover-layer" style="display:none">
      <line id="six-month-hover-line" x1="${x(0)}" x2="${x(0)}" y1="${pad.top}" y2="${height - pad.bottom}" stroke="rgba(255,255,255,.5)" stroke-width="1.5" />
      <circle id="six-month-hover-dot" cx="${x(0)}" cy="${y(0)}" r="6" fill="#151922" stroke="#ffc640" stroke-width="3" />
    </g>
    ${months.map((month, index) => `<text x="${x(index) - 16}" y="${height - 12}" fill="#858c99" font-size="${axisFont}">${shortMonth(month)}</text>`).join("")}
  `;
}

function updateSixMonthHover(event) {
  if (!app.sixMonthMeta) return;
  const svg = document.getElementById("six-month-chart");
  const tooltip = document.getElementById("six-month-tooltip");
  const rect = svg.getBoundingClientRect();
  const { width, height, pad, months, topCategories, values, max } = app.sixMonthMeta;
  const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
  const index = Math.min(months.length - 1, Math.max(0, Math.round(ratio * (months.length - 1))));
  const x = pad.left + (index / Math.max(1, months.length - 1)) * (width - pad.left - pad.right);
  const y = (value) => height - pad.bottom - (value / max) * (height - pad.top - pad.bottom);
  const rows = topCategories
    .map((category) => ({ category, value: values.get(category.id)[index] || 0 }))
    .filter((row) => row.value > 0)
    .sort((a, b) => b.value - a.value);
  const top = rows[0] || { category: topCategories[0], value: 0 };

  document.getElementById("six-month-hover-layer").style.display = "block";
  document.getElementById("six-month-hover-line").setAttribute("x1", x);
  document.getElementById("six-month-hover-line").setAttribute("x2", x);
  document.getElementById("six-month-hover-dot").setAttribute("cx", x);
  document.getElementById("six-month-hover-dot").setAttribute("cy", y(top.value));
  document.getElementById("six-month-hover-dot").setAttribute("stroke", top.category?.color || "#ffc640");

  tooltip.classList.add("show");
  tooltip.setAttribute("aria-hidden", "false");
  tooltip.innerHTML = `
    <strong>${labelForMonth(months[index])}</strong>
    ${rows.slice(0, 5).map(({ category, value }) => `<span><i class="swatch" style="background:${category.color}"></i>${categoryLabel(category)}: ${money(value)}</span>`).join("") || "<span>Sin gastos en este mes.</span>"}
  `;
  tooltip.style.left = `${Math.min(rect.width - 250, Math.max(8, (x / width) * rect.width + 12))}px`;
  tooltip.style.top = "18px";
}

function hideSixMonthHover() {
  document.getElementById("six-month-hover-layer")?.setAttribute("style", "display:none");
  const tooltip = document.getElementById("six-month-tooltip");
  if (!tooltip) return;
  tooltip.classList.remove("show");
  tooltip.setAttribute("aria-hidden", "true");
}

function renderCategoryTable(expenses) {
  const totals = totalsByCategory(expenses);
  const monthProjection = projectionsByCategory(app.projectionMonth);
  const todayRatio = getMonthProgressRatio();

  document.getElementById("category-table-body").innerHTML = app.categories.map((category) => {
    const spent = totals.get(category.id)?.spent || 0;
    const projected = monthProjection.get(category.id) || 0;
    const percent = projected ? Math.round((spent / projected) * 100) : 0;
    const remaining = projected - spent;
    const expected = projected * todayRatio;
    const paceDelta = expected - spent;
    const status = !projected ? "Sin presupuesto" : paceDelta >= 0 ? "En ritmo" : "Sobre ritmo";
    const statusClass = !projected ? "warn" : paceDelta >= 0 ? "" : "danger";
    const barClass = percent >= 100 ? "danger" : percent >= Math.max(80, todayRatio * 100 + 15) ? "warn" : "";
    return `
      <tr>
        <td><button class="category-cell" data-category-filter="${category.id}"><i class="swatch" style="background:${category.color}"></i>${categoryLabel(category)}</button></td>
        <td class="amount">${money(spent)}</td>
        <td>${projected ? money(projected) : "-"}</td>
        <td>
          <div class="pace-bar">
            <div class="bar-track"><div class="bar-fill ${barClass}" style="width:${Math.min(100, percent)}%"></div></div>
            <span>${percent}%</span>
          </div>
        </td>
        <td class="${remaining >= 0 ? "positive" : "negative"}">${projected ? money(remaining) : "-"}</td>
        <td><span class="status-pill ${statusClass}">${status}</span></td>
      </tr>
    `;
  }).join("");
}

function renderCategoryPills() {
  document.getElementById("category-pills").innerHTML = app.categories.map((category) => `
    <button class="${app.selectedCategory === category.id ? "active" : ""}" data-category-filter="${category.id}">
      ${categoryLabel(category)}
    </button>
  `).join("");
  document.querySelector("[data-category-filter='all']").classList.toggle("active", app.selectedCategory === "all");
}

function renderTransactions() {
  const range = getPeriodRange(app.period);
  let rows = filterByRange(app.expenses, range.start, range.end);
  if (app.selectedCategory !== "all") {
    rows = rows.filter((expense) => expense.category_id === app.selectedCategory);
  }
  if (app.search) {
    rows = rows.filter((expense) => [
      expense.merchant,
      expense.description,
      expense.payment_account,
      expense.notes,
      categoryLabel(expense.category)
    ].join(" ").toLowerCase().includes(app.search));
  }
  rows.sort((a, b) => b.spent_at.localeCompare(a.spent_at));
  document.getElementById("transactions-title").textContent = app.selectedCategory === "all"
    ? "Movimientos"
    : `Movimientos - ${categoryLabel(app.categories.find((category) => category.id === app.selectedCategory))}`;
  document.getElementById("transactions-copy").textContent = `${rows.length} gasto${rows.length === 1 ? "" : "s"} en ${periodLabel(app.period).toLowerCase()}.`;
  document.getElementById("transactions-body").innerHTML = rows.map((expense) => `
    <tr>
      <td>${formatDate(expense.spent_at)}</td>
      <td><strong>${escapeHtml(expense.merchant)}</strong><br><span>${escapeHtml(expense.description || "")}</span></td>
      <td>${escapeHtml(categoryLabel(expense.category))}</td>
      <td>${escapeHtml(expense.payment_account || "-")}</td>
      <td class="amount">${money(expense.amount)}</td>
      <td>${escapeHtml(expense.notes || "")}</td>
    </tr>
  `).join("") || `<tr><td colspan="6">No se encontraron movimientos.</td></tr>`;
}

function setCategoryFilter(categoryId) {
  app.selectedCategory = categoryId;
  renderCategoryPills();
  renderTransactions();
}

function openProjectionModal() {
  document.getElementById("projection-month").value = app.projectionMonth;
  renderProjectionForm();
  document.getElementById("projection-modal").classList.add("open");
}

function closeProjectionModal() {
  document.getElementById("projection-modal").classList.remove("open");
}

function renderProjectionForm() {
  const projections = projectionsByCategory(app.projectionMonth);
  document.getElementById("projection-form").innerHTML = app.categories.map((category) => `
    <div class="projection-row">
      <label for="projection-${category.id}">${categoryLabel(category)}</label>
      <div class="money-input">
        <span>RD$</span>
        <input id="projection-${category.id}" type="text" inputmode="numeric" autocomplete="off" value="${formatAmountInput(projections.get(category.id) || 0)}" data-projection-category="${category.id}" />
      </div>
    </div>
  `).join("");
  updateProjectionModalTotal();
}

function updateProjectionModalTotal() {
  const inputs = Array.from(document.querySelectorAll("[data-projection-category]"));
  const total = inputs.reduce((acc, input) => acc + parseAmountInput(input.value), 0);
  const count = inputs.filter((input) => parseAmountInput(input.value) > 0).length;
  document.getElementById("projection-modal-total").textContent = money(total);
  document.getElementById("projection-count").textContent = `${count} de ${inputs.length} categorías presupuestadas`;
}

function handleProjectionAmountInput(event) {
  const input = event.target.closest("[data-projection-category]");
  if (!input) return;
  formatAmountField(input);
  updateProjectionModalTotal();
}

async function saveProjections() {
  const selectedMonth = document.getElementById("projection-month").value || monthKey(new Date());
  const rows = Array.from(document.querySelectorAll("[data-projection-category]")).map((input) => ({
    category_id: input.dataset.projectionCategory,
    projected_amount: parseAmountInput(input.value),
    month: `${selectedMonth}-01`
  }));

  if (app.demoMode) {
    rows.forEach((row) => {
      const existing = app.projections.find((item) => item.month === row.month && item.category_id === row.category_id);
      if (existing) existing.projected_amount = row.projected_amount;
      else app.projections.push({ ...row, id: `demo-${crypto.randomUUID()}`, user_id: app.localAuth ? "temp-admin" : "demo-user" });
    });
    app.projectionMonth = selectedMonth;
    persistTemporaryData();
    closeProjectionModal();
    renderDashboard();
    showToast(app.localAuth ? "Presupuesto guardado." : "presupuesto mensual guardada en la vista demo.");
    return;
  }

  if (app.supabaseUnavailable) {
    showToast("Primero aplica supabase-schema.sql para guardar datos reales.");
    return;
  }

  if (!app.session?.user?.id) return;
  const payload = rows.map((row) => ({ ...row, user_id: app.session.user.id }));
  const { error } = await app.supabase
    .from("monthly_projections")
    .upsert(payload, { onConflict: "user_id,month,category_id" });
  if (error) {
    showToast(error.message);
    return;
  }
  app.projectionMonth = selectedMonth;
  closeProjectionModal();
  await loadApp();
  showToast("Presupuesto guardado.");
}

function openExpenseModal() {
  const form = document.getElementById("expense-form");
  form.reset();
  form.elements.spent_at.value = isoDate(new Date());
  document.getElementById("expense-modal").classList.add("open");
}

function closeExpenseModal() {
  document.getElementById("expense-modal").classList.remove("open");
}

function populateExpenseCategorySelect() {
  const select = document.querySelector("select[name='category_id']");
  select.innerHTML = app.categories.map((category) => `<option value="${category.id}">${categoryLabel(category)}</option>`).join("");
}

async function saveExpense(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const category = app.categories.find((item) => item.id === data.category_id);
  const row = {
    spent_at: data.spent_at,
    merchant: data.merchant.trim(),
    description: data.description.trim(),
    amount: Number(data.amount || 0),
    category_id: data.category_id,
    payment_account: data.payment_account.trim(),
    notes: data.notes.trim()
  };

  if (app.demoMode) {
    app.expenses.unshift({ ...row, id: `demo-${crypto.randomUUID()}`, user_id: app.localAuth ? "temp-admin" : "demo-user", category });
    persistTemporaryData();
    closeExpenseModal();
    renderDashboard();
    showToast(app.localAuth ? "Gasto guardado." : "Gasto guardado en la vista demo.");
    return;
  }

  if (app.supabaseUnavailable) {
    showToast("Primero aplica supabase-schema.sql para guardar datos reales.");
    return;
  }

  if (!app.session?.user?.id) return;
  const { error } = await app.supabase.from("expenses").insert({ ...row, user_id: app.session.user.id });
  if (error) {
    showToast(error.message);
    return;
  }
  closeExpenseModal();
  await loadApp();
  showToast("Gasto guardado.");
}

function totalsByCategory(expenses) {
  return expenses.reduce((map, expense) => {
    const current = map.get(expense.category_id) || { spent: 0 };
    current.spent += Number(expense.amount);
    map.set(expense.category_id, current);
    return map;
  }, new Map());
}

function projectionsByCategory(month) {
  const monthDate = `${month}-01`;
  return app.projections
    .filter((projection) => projection.month === monthDate)
    .reduce((map, projection) => map.set(projection.category_id, Number(projection.projected_amount)), new Map());
}

function getTopCategoriesForMonths(months, limit) {
  const scored = app.categories.map((category) => {
    const total = months.reduce((acc, month) => {
      const range = getMonthRange(parseMonth(month));
      return acc + sum(filterByRange(app.expenses, range.start, range.end).filter((expense) => expense.category_id === category.id), "amount");
    }, 0);
    return { category, total };
  });
  return scored
    .sort((a, b) => b.total - a.total || a.category.sort_order - b.category.sort_order)
    .slice(0, limit)
    .map((item) => item.category);
}

function buildDemoExpenseRows(byName, userId) {
  const currentRows = DEMO_EXPENSES.map(([categoryName, spentAt, merchant, description, amount, account, notes]) => ({
    user_id: userId,
    spent_at: shiftDemoDate(spentAt, 0),
    merchant,
    description,
    amount,
    category_id: byName.get(categoryName)?.id || byName.get("Sin categoría")?.id,
    payment_account: account,
    notes
  }));
  const historicalRows = [];
  const multipliers = [0.72, 0.88, 0.64, 1.12, 0.94];
  multipliers.forEach((multiplier, monthOffsetIndex) => {
    DEMO_EXPENSES.slice(0, 10).forEach(([categoryName, spentAt, merchant, description, amount, account], rowIndex) => {
      const adjusted = Math.round(amount * multiplier * (0.72 + (rowIndex % 4) * 0.12));
      if (adjusted < 1200) return;
      historicalRows.push({
        user_id: userId,
        spent_at: shiftDemoDate(spentAt, -(multipliers.length - monthOffsetIndex)),
        merchant,
        description,
        amount: adjusted,
        category_id: byName.get(categoryName)?.id || byName.get("Sin categoría")?.id,
        payment_account: account,
        notes: "Dato histÃ³rico demo"
      });
    });
  });
  return [...historicalRows, ...currentRows];
}

function getMonthProjectionTotal(month) {
  return Array.from(projectionsByCategory(month).values()).reduce((acc, value) => acc + value, 0);
}

function getPeriodRange(period) {
  const today = startOfDay(new Date());
  if (period === "today") return { start: today, end: endOfDay(today) };
  if (period === "last3") return { start: addDays(today, -2), end: endOfDay(today) };
  if (period === "last7") return { start: addDays(today, -6), end: endOfDay(today) };
  if (period === "last30") return { start: addDays(today, -29), end: endOfDay(today) };
  if (period === "lastMonth") {
    const date = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    return getMonthRange(date);
  }
  if (period === "ytd") return { start: new Date(today.getFullYear(), 0, 1), end: endOfDay(today) };
  if (period === "all") return { start: null, end: null };
  if (period === "custom") {
    return {
      start: app.customStart ? new Date(`${app.customStart}T00:00:00`) : null,
      end: app.customEnd ? new Date(`${app.customEnd}T23:59:59`) : null
    };
  }
  return getMonthRange(today);
}

function getMonthRange(date) {
  return {
    start: new Date(date.getFullYear(), date.getMonth(), 1),
    end: new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59)
  };
}

function filterByRange(expenses, start, end) {
  return expenses.filter((expense) => {
    const date = new Date(`${expense.spent_at}T12:00:00`);
    if (start && date < start) return false;
    if (end && date > end) return false;
    return true;
  });
}

function calculateForecast(monthTotal, projected) {
  const today = new Date();
  const days = daysInMonth(today);
  const day = Math.min(today.getDate(), days);
  const expected = projected / days * day;
  const forecast = day ? monthTotal / day * days : monthTotal;
  return {
    forecast,
    remaining: projected - forecast,
    delta: expected - monthTotal
  };
}

function getMonthProgressRatio() {
  const today = new Date();
  return Math.min(1, today.getDate() / daysInMonth(today));
}

function getLastMonths(count) {
  const current = parseMonth(app.projectionMonth);
  return Array.from({ length: count }, (_item, index) => {
    const date = new Date(current.getFullYear(), current.getMonth() - (count - 1 - index), 1);
    return monthKey(date);
  });
}

function money(value) {
  return rdMoney.format(Number(value || 0)).replace("DOP", "RD$");
}

function formatAmountInput(value) {
  const amount = Number(value || 0);
  return amount ? compactNumber.format(amount) : "0";
}

function parseAmountInput(value) {
  const str = String(value || "").replace(/,/g, "").trim();
  const num = parseFloat(str);
  return isNaN(num) ? 0 : num;
}

function formatAmountField(input) {
  const raw = input.value.replace(/,/g, "").trim();
  const isTypingDecimal = raw.endsWith(".") || /\.\d{0,1}$/.test(raw);
  if (isTypingDecimal) {
    input.dataset.rawValue = String(parseAmountInput(raw));
    return;
  }
  const cursor = input.selectionStart || 0;
  const digitsBeforeCursor = input.value.slice(0, cursor).replace(/[^\d.]/g, "").length;
  const hasDigits = /\d/.test(input.value);
  input.value = hasDigits ? formatAmountInput(parseAmountInput(input.value)) : "";
  input.dataset.rawValue = String(parseAmountInput(input.value));
  const nextCursor = positionAfterDigits(input.value, digitsBeforeCursor);
  input.setSelectionRange(nextCursor, nextCursor);
}

function positionAfterDigits(value, digitCount) {
  if (digitCount <= 0) return 0;
  let seenDigits = 0;
  for (let index = 0; index < value.length; index += 1) {
    if (/\d/.test(value[index])) seenDigits += 1;
    if (seenDigits >= digitCount) return index + 1;
  }
  return value.length;
}

function compactMoney(value) {
  const amount = Number(value || 0);
  if (Math.abs(amount) < 100000) return money(amount);
  if (Math.abs(amount) >= 1000000) return `RD$${compactDecimal.format(Math.round(amount / 100000) / 10)}M`;
  return `RD$${compactDecimal.format(Math.round(amount / 100) / 10)}K`;
}

function sum(rows, key) {
  return rows.reduce((acc, row) => acc + Number(row[key] || 0), 0);
}

function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function parseMonth(month) {
  const [year, monthIndex] = month.split("-").map(Number);
  return new Date(year, monthIndex - 1, 1);
}

function daysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function endOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
}

function isoDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function shiftDemoDate(dateString, monthOffset = 0) {
  const original = new Date(`${dateString}T12:00:00`);
  const now = new Date();
  const target = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
  return isoDate(new Date(target.getFullYear(), target.getMonth(), Math.min(original.getDate(), daysInMonth(target))));
}

function shortMonth(month) {
  const date = parseMonth(month);
  return date.toLocaleDateString("es-DO", { month: "short" });
}

function labelForMonth(month) {
  return parseMonth(month).toLocaleDateString("es-DO", { month: "long", year: "numeric" });
}

function periodLabel(period) {
  return {
    today: "Hoy",
    last3: "Ãšltimos 3 dÃ­as",
    last7: "Ãšltimos 7 dÃ­as",
    last30: "Ãšltimos 30 dÃ­as",
    thisMonth: "Este mes",
    lastMonth: "Mes pasado",
    ytd: "AÃ±o actual",
    all: "Todo el historial",
    custom: "Rango personalizado"
  }[period] || "Este mes";
}

function formatDate(dateString) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("es-DO", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

// ─── INCOME PROJECTIONS ───────────────────────────────────────────────────────

function getIncomeAmount(slug, month) {
  const monthDate = `${month}-01`;
  const row = app.incomeProjections.find(r => r.income_slug === slug && r.month === monthDate);
  return row ? Number(row.projected_amount) : 0;
}

function getMonthIncomeTotal(month) {
  return DEFAULT_INCOME_CATEGORIES.reduce((sum, cat) => sum + getIncomeAmount(cat.slug, month), 0);
}

function openIncomeModal() {
  app.incomeMonth = app.projectionMonth;
  document.getElementById("income-month").value = app.incomeMonth;
  renderIncomeForm();
  document.getElementById("income-modal").classList.add("open");
  document.getElementById("income-modal").setAttribute("aria-hidden", "false");
}

function closeIncomeModal() {
  document.getElementById("income-modal").classList.remove("open");
  document.getElementById("income-modal").setAttribute("aria-hidden", "true");
}

function renderIncomeForm() {
  const form = document.getElementById("income-form");
  let total = 0;
  let filled = 0;
  form.innerHTML = DEFAULT_INCOME_CATEGORIES.map(cat => {
    const amount = getIncomeAmount(cat.slug, app.incomeMonth);
    if (amount > 0) filled++;
    total += amount;
    return `<div class="projection-row">
      <label for="income-${cat.slug}">
        <span class="cat-dot" style="background:${cat.color}"></span>
        ${escapeHtml(cat.name)}
      </label>
      <input id="income-${cat.slug}" type="text" inputmode="numeric" autocomplete="off"
        value="${amount ? compactNumber.format(amount) : ''}"
        placeholder="0.00"
        data-income-slug="${cat.slug}" />
    </div>`;
  }).join("");
  document.getElementById("income-modal-total").textContent = money(total);
  document.getElementById("income-count").textContent = `${filled} de ${DEFAULT_INCOME_CATEGORIES.length} fuentes con ingreso`;
}

function handleIncomeAmountInput(event) {
  const input = event.target;
  if (!input.dataset.incomeSlug) return;
  const raw = input.value.replace(/,/g, "").trim();
  const isTypingDecimal = raw.endsWith(".") || /\.\d{0,1}$/.test(raw);
  if (!isTypingDecimal) {
    const val = parseAmountInput(input.value);
    input.value = val ? compactNumber.format(val) : "";
  }
  let total = 0;
  document.querySelectorAll("[data-income-slug]").forEach(inp => {
    total += parseAmountInput(inp.value);
  });
  let filled = 0;
  document.querySelectorAll("[data-income-slug]").forEach(inp => {
    if (parseAmountInput(inp.value) > 0) filled++;
  });
  document.getElementById("income-modal-total").textContent = money(total);
  document.getElementById("income-count").textContent = `${filled} de ${DEFAULT_INCOME_CATEGORIES.length} fuentes con ingreso`;
}

async function saveIncomeProjections() {
  const selectedMonth = document.getElementById("income-month").value || app.incomeMonth;
  const monthDate = `${selectedMonth}-01`;
  const rows = DEFAULT_INCOME_CATEGORIES.map(cat => ({
    income_slug: cat.slug,
    projected_amount: parseAmountInput(document.getElementById(`income-${cat.slug}`)?.value || "0"),
    month: monthDate
  })).filter(r => r.projected_amount > 0);

  if (app.demoMode || app.supabaseUnavailable) {
    app.incomeProjections = app.incomeProjections.filter(r => r.month !== monthDate);
    rows.forEach(r => app.incomeProjections.push({ ...r, id: `demo-${crypto.randomUUID()}`, user_id: "demo-user" }));
    app.incomeMonth = selectedMonth;
    closeIncomeModal();
    renderDashboard();
    showToast("Ingresos guardados.");
    return;
  }

  if (!app.session?.user?.id) return;
  // Borrar los del mes y reinsertar
  await app.supabase.from("monthly_income_projections").delete().eq("user_id", app.session.user.id).eq("month", monthDate);
  if (rows.length > 0) {
    const payload = rows.map(r => ({ ...r, user_id: app.session.user.id }));
    const { error } = await app.supabase.from("monthly_income_projections").insert(payload);
    if (error) { showToast(error.message); return; }
  }
  app.incomeMonth = selectedMonth;
  await loadApp();
  closeIncomeModal();
  showToast("Ingresos guardados correctamente.");
}

function renderIncomePanel() {
  const tbody = document.getElementById("income-table-body");
  if (!tbody) return;
  const month = app.projectionMonth;
  const total = getMonthIncomeTotal(month);
  tbody.innerHTML = DEFAULT_INCOME_CATEGORIES.map(cat => {
    const amount = getIncomeAmount(cat.slug, month);
    if (amount === 0) return "";
    const pct = total > 0 ? ((amount / total) * 100).toFixed(1) : "0.0";
    return `<tr>
      <td><span class="cat-dot" style="background:${cat.color}"></span> ${escapeHtml(cat.name)}</td>
      <td>${money(amount)}</td>
      <td>${pct}%</td>
    </tr>`;
  }).filter(Boolean).join("") || `<tr><td colspan="3" style="text-align:center;color:var(--muted);padding:1.5rem">Sin ingresos definidos — haz clic en "Editar ingresos" para agregar.</td></tr>`;
  document.getElementById("income-table-total").textContent = money(total);
  const subtitle = document.getElementById("income-panel-subtitle");
  if (subtitle) subtitle.textContent = `Ingresos proyectados para ${labelForMonth(month)}.`;
}
