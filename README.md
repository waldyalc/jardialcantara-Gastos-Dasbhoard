# Gastos Jardi Alcantara

Dashboard personal de gastos para registrar, analizar y proyectar gastos en pesos dominicanos (`RD$`).

## Uso local

Sirve esta carpeta con un servidor estatico:

```powershell
py -3 -m http.server 8001
```

Luego abre:

- `http://127.0.0.1:8001/`
- `http://127.0.0.1:8001/?demo=1`

## Configuracion

Copia `config.example.js` como `config.js` y completa los valores publicos de Supabase:

```js
window.APP_CONFIG = {
  supabaseUrl: "https://YOUR_PROJECT_REF.supabase.co",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY",
  ownerName: "Jardi Alcantara"
};
```

No subas llaves privadas, `service_role`, cadenas de conexion ni tokens de Gmail al frontend.

## Login temporal

Mientras se configura Google Auth:

- Usuario: `admin`
- Contrasena: `admin`

## Base de datos

El esquema inicial esta en `supabase-schema.sql`. Aplicalo en Supabase antes de usar datos reales.

## Correos y gastos por revisar

Este deploy no incluye lectura de correos, Gmail ni buzón de gastos por revisar. Cuando esa función se implemente, debe vivir en backend seguro, por ejemplo Supabase Edge Functions, y nunca guardar tokens de Gmail ni llaves `service_role` en `config.js` ni en ningun archivo frontend.
