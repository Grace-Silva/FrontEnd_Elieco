<div align="center">

<img src="public/logo/logos.png" alt="Logo de ELIECO" width="180" />

# ELIECO · Frontend

**Moda que inspira, naturaleza que respira.**

Aplicación web de ELIECO, marca colombiana de **moda sostenible femenina bajo pedido**: catálogo, SEO técnico, prerender estático en producción, contacto por WhatsApp y formulario conectado a un backend propio.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Node](https://img.shields.io/badge/Node-%E2%89%A5%2020.19-339933?logo=nodedotjs&logoColor=white)

</div>

---

## Tabla de contenidos

- [Características](#características)
- [Stack tecnológico](#stack-tecnológico)
- [Requisitos previos](#requisitos-previos)
- [Inicio rápido](#inicio-rápido)
- [Scripts disponibles](#scripts-disponibles)
- [Variables de entorno](#variables-de-entorno)
- [Rutas de la aplicación](#rutas-de-la-aplicación)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Integración con el backend](#integración-con-el-backend)
- [Integración con WhatsApp](#integración-con-whatsapp)
- [Gestión de contenido](#gestión-de-contenido)
- [Sistema de diseño](#sistema-de-diseño)
- [Accesibilidad](#accesibilidad)
- [SEO, GEO y rendimiento](#seo-geo-y-rendimiento)
- [Despliegue](#despliegue)
- [Estado del proyecto y pendientes](#estado-del-proyecto-y-pendientes)
- [Licencia](#licencia)

---

## Características

- **Tienda con filtros, búsqueda y paginación.** Filtrado por tipo de prenda, talla y color, y búsqueda de texto insensible a tildes y mayúsculas. Todo el estado vive en la URL (`/tienda?prenda=Vestidos&talla=M&page=2`), por lo que cualquier vista se puede compartir o guardar como marcador.
- **Detalle de producto.** Galería de imágenes, selector de talla y color (con opción *Personalizado*), indicadores de impacto ambiental y productos relacionados.
- **Contacto por WhatsApp.** Genera un mensaje prellenado con la prenda, talla, color y nombre del cliente, y abre WhatsApp mediante *Click to Chat*.
- **Formulario de contacto robusto.** Validación en cliente con las mismas reglas del backend, protección contra doble envío, errores por campo devueltos por el servidor, manejo de timeouts y límites de peticiones (HTTP 429), y campo trampa (*honeypot*) anti-spam.
- **Contenido centralizado.** Datos de la empresa, enlaces y preguntas frecuentes se editan en un solo archivo.
- **Diseño responsive** con paneles de filtros tipo *drawer* en móvil.
- **Accesibilidad.** Enlace «Saltar al contenido», roles ARIA, estados de foco visibles y mensajes de error anunciados a lectores de pantalla.
- **SEO / GEO.** Metadatos por ruta (`react-helmet-async`), Open Graph, Twitter Cards, canonical, JSON-LD (`Organization`, `WebSite`, `Product`, `FAQPage`) y FAQs indexables.
- **Build con prerender.** En producción, `dist/` incluye HTML estático por ruta (inicio, tienda, nosotros, contacto y cada ficha de producto) más `sitemap.xml` y `robots.txt`.

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| UI | [React 19](https://react.dev/) |
| Enrutamiento | [React Router 7](https://reactrouter.com/) |
| Build y servidor de desarrollo | [Vite 8](https://vite.dev/) con `@vitejs/plugin-react` |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer |
| Tipografías | [Playfair Display](https://fontsource.org/fonts/playfair-display) y [Montserrat](https://fontsource.org/fonts/montserrat) (autoalojadas con Fontsource) |
| Iconografía | [Lucide React](https://lucide.dev/) y [React Icons](https://react-icons.github.io/react-icons/) |
| Metadatos / SEO en cliente | [react-helmet-async](https://github.com/staylor/react-helmet-async) |

## Requisitos previos

- **Node.js** `^20.19.0` o `>=22.12.0` (requerido por Vite 8)
- **pnpm** 9+ (recomendado; el repo incluye `pnpm-lock.yaml`) o **npm** 10+
- El **backend de ELIECO** (Express + Nodemailer) en ejecución si se quiere probar el formulario de contacto

## Inicio rápido

```bash
# 1. Clonar el repositorio
git clone https://github.com/jcarrietab1974/FrontEnd_Elieco.git
cd FrontEnd_Elieco

# 2. Instalar dependencias
pnpm install
# npm install

# 3. Configurar variables de entorno (Linux / macOS / Git Bash)
cp .env.example .env

# 4. Iniciar el servidor de desarrollo
pnpm run dev
```

**Windows (PowerShell)** — paso 3 en lugar de `cp`:

```powershell
Copy-Item .env.example .env
```

**Windows (CMD):** `copy .env.example .env`

Edita `.env` según tu entorno (`VITE_SITE_URL`, API local, WhatsApp). Tras cambiar `.env`, reinicia el servidor de desarrollo o vuelve a ejecutar `pnpm run build` en producción.

La aplicación quedará disponible en **http://localhost:5173**.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `pnpm run dev` | Servidor de desarrollo con recarga en caliente (puerto `5173`) |
| `pnpm run prebuild` | Genera `public/sitemap.xml` y `public/robots.txt` (también se ejecuta antes de `build`) |
| `pnpm run build:client` | Bundle del navegador en `dist/` |
| `pnpm run build:server` | Bundle SSR en `dist/server/` para prerender |
| `pnpm run build` | `build:client` + `build:server` + prerender de rutas indexables en `dist/` |
| `pnpm run preview` | Sirve `dist/` localmente antes de desplegar |

Con **npm**, sustituye `pnpm run` por `npm run` (mismos nombres de script).

## Variables de entorno

Crea un archivo `.env` en la raíz a partir de `.env.example`:

| Variable | Obligatoria | Descripción | Ejemplo |
|---|:---:|---|---|
| `VITE_SITE_URL` | Sí en prod | URL pública del sitio, **sin** `/` final. Canonical, Open Graph, JSON-LD, sitemap y robots. Los scripts de build leen `.env` con `scripts/load-env.mjs`. | `https://eliecomoda.com` |
| `VITE_API_URL` | Sí* | URL base del backend, **sin** `/` final. Por defecto en desarrollo: `http://localhost:5000`. | `http://localhost:5000` |
| `VITE_WHATSAPP_NUMBER` | Sí | WhatsApp oficial, solo dígitos (8–15). Sin número válido, los botones de WhatsApp se deshabilitan. | `573005200883` |

\* Imprescindible en producción; en desarrollo tiene un valor por defecto.

> En **producción**, define `VITE_SITE_URL`, `VITE_API_URL` y `VITE_WHATSAPP_NUMBER` en el hosting **antes** de `pnpm run build` (Vite las incrusta en el cliente y en el bundle SSR). Dominio objetivo documentado en `.env.example`: `https://eliecomoda.com` (fallback en código: `https://elieco.com.co`).

> [!WARNING]
> Las variables con prefijo `VITE_` se incrustan en el código que recibe el navegador y son **públicas**. Nunca almacenes credenciales, tokens ni secretos en ellas.

El archivo `.env` está excluido del control de versiones mediante `.gitignore`; solo se versiona `.env.example`.

## Rutas de la aplicación

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Inicio | Hero, productos destacados y propuesta de sostenibilidad |
| `/tienda` | Tienda | Catálogo con filtros (`prenda`, `talla`, `color`), búsqueda (`q`) y paginación (`page`) |
| `/producto/:id` | Detalle de producto | Galería, opciones de compra y contacto por WhatsApp |
| `/nosotros` | Nosotros | Historia, procesos y comunidad de la marca |
| `/contacto` | Contacto | Formulario, datos de contacto y preguntas frecuentes |
| `*` | 404 | Página no encontrada |

## Estructura del proyecto

```text
FrontEnd_Elieco/
├── public/
│   ├── images/              # Hero, nosotros, productos
│   ├── logo/                # logos.png, favicon.png
│   ├── sitemap.xml          # Generado en prebuild (no editar a mano)
│   ├── robots.txt           # Generado en prebuild
│   ├── site.webmanifest
│   └── _redirects           # Fallback SPA (Netlify)
├── scripts/
│   ├── load-env.mjs         # Carga .env en scripts Node
│   ├── seo-routes.mjs       # Rutas indexables (sitemap + prerender)
│   ├── generate-sitemap.mjs
│   └── prerender.mjs
├── src/
│   ├── components/
│   │   ├── seo/             # PageMeta, JsonLd
│   │   ├── common/          # Acordeón, logo, íconos, redes
│   │   ├── contact/         # Formulario
│   │   ├── home/            # Hero
│   │   ├── layout/
│   │   └── products/
│   ├── config/
│   │   ├── site.js          # Empresa, FAQs, copy global
│   │   └── seo.js           # Títulos/descripciones por ruta
│   ├── data/products.js
│   ├── entry-server.jsx     # Render SSR para prerender
│   ├── pages/
│   ├── services/
│   └── utils/
│       ├── format.js
│       ├── seo.js
│       └── structuredData.js
├── .env.example
├── index.html
├── vercel.json
└── vite.config.js
```

## Integración con el backend

El formulario de contacto se comunica con un backend Express + Nodemailer mediante:

```http
POST {VITE_API_URL}/api/contact
Content-Type: application/json
```

```json
{
  "nombre": "Ana Pérez",
  "email": "ana@correo.com",
  "telefono": "+57 300 123 4567",
  "mensaje": "Quisiera información sobre la colección.",
  "website": ""
}
```

**Respuesta esperada**

```jsonc
// Éxito
{ "success": true, "message": "Mensaje enviado correctamente." }

// Error
{
  "success": false,
  "message": "Descripción del error",
  "code": "VALIDATION_ERROR",
  "errors": [{ "field": "email", "message": "El correo no tiene un formato válido." }]
}
```

**Comportamiento del cliente**

- Valida antes de enviar con las mismas reglas del backend:

  | Campo | Regla |
  |---|---|
  | `nombre` | Obligatorio, de 2 a 100 caracteres |
  | `email` | Obligatorio, formato válido, máximo 254 caracteres |
  | `telefono` | Opcional; de 7 a 15 dígitos, admite `+`, espacios, paréntesis y guiones |
  | `mensaje` | Obligatorio, de 5 a 2000 caracteres |

- Bloquea envíos duplicados aunque el usuario haga doble clic rápido.
- Muestra los errores del servidor junto a cada campo (`errors[]`).
- Informa de forma específica fallos de conexión, *timeout* (15 s) y límite de peticiones (429).
- Conserva lo escrito si el envío falla y solo limpia el formulario tras recibir `success: true`.
- `website` es un campo trampa anti-spam: se oculta con CSS (`.hp-field`) y debe viajar **vacío**.

**Configuración CORS en el backend.** La variable `FRONTEND_ORIGIN` del backend debe incluir el origen del frontend, sin `/` final:

| Entorno | Valor |
|---|---|
| Desarrollo | `http://localhost:5173` |
| Producción | `https://tu-dominio.com` |

## Integración con WhatsApp

Número oficial en `src/config/site.js` y `VITE_WHATSAPP_NUMBER` (deben coincidir). Mensaje genérico: `whatsappDefaultMessage` en `site.js`.

`src/services/whatsappService.js` implementa *Click to Chat*:

1. Limpia el número configurado (elimina `+`, espacios, guiones y paréntesis).
2. Valida el formato internacional (8 a 15 dígitos); si no es válido, no genera enlaces.
3. Construye `https://wa.me/<NUMERO>?text=<MENSAJE>` con `encodeURIComponent`.
4. Abre la conversación en una pestaña nueva con `noopener,noreferrer`.

Mensaje generado desde la ficha de producto:

> Hola, estoy interesado(a) en la prenda *{producto}* de ELIECO. Talla: *{talla}*. Color: *{color}*. Mi nombre es *{nombre}*. Me gustaría recibir más información sobre disponibilidad, tallas y precio.

## Gestión de contenido

| Qué editar | Dónde |
|---|---|
| Datos de la empresa, FAQs, textos del footer y mensaje WhatsApp por defecto | `src/config/site.js` |
| Metadatos SEO por ruta (title, description) | `src/config/seo.js` |
| Metadatos y JSON-LD por página | `PageMeta` / `JsonLd` en cada `src/pages/*.jsx` |
| Catálogo de productos (precios, tallas, colores, impacto ambiental) | `src/data/products.js` |
| Fotografías de producto | `public/images/productos/` |
| Imágenes de portada y de la sección *Nosotros* | `public/images/hero/` y `public/images/nosotros/` |
| Logotipo y favicon (`logos.png`, `favicon.png`) | `public/logo/` |
| Paleta de colores y tipografías | `tailwind.config.js` |

### Añadir un producto

Agrega un objeto al arreglo `products` en `src/data/products.js` con la siguiente estructura:

```js
{
  id: 'vestido-ejemplo',                 // slug único; se usa en la URL /producto/:id
  nombre: 'Vestido ejemplo',
  categoria: 'Vestidos',                 // alimenta el filtro "Prenda"
  coleccion: 'Colección Invierno 2026',
  descripcion: 'Descripción de la prenda.',
  precio: 250000,                        // en COP, sin separadores
  imagen: '/images/productos/vestido-ejemplo.jpg',
  imagenes: ['/images/productos/vestido-ejemplo.jpg'],
  tallas: ['S', 'M', 'L'],
  colores: [COLORS.verde, COLORS.negro],
  destacado: false,                      // true → aparece en la página de inicio
  impacto: impacto(100),                 // botellas recicladas (y litros de agua, opcional)
}
```

### Migrar a una API de productos

Las páginas consumen el catálogo únicamente a través de `getProducts`, `getProductById`, `getFeatured` y `getRelated`. Cuando exista un backend de productos, basta con reemplazar estas funciones por llamadas HTTP; el resto de la aplicación no requiere cambios.

## Sistema de diseño

**Paleta** (definida en `tailwind.config.js`)

| Token | Valor | Uso |
|---|---|---|
| `brand-dark` | `#0F3320` | Color principal, botones y encabezados |
| `brand` | `#315B3B` | Estados *hover* y acentos |
| `brand-light` | `#E8EFE5` | Fondos suaves y mensajes de éxito |
| `brand-cream` | `#F5F5F2` | Fondos alternos |
| `brand-wine` | `#7A2A2A` | Acento secundario |
| `ink` / `muted` | `#1C1C1C` / `#777777` | Texto principal y secundario |

**Tipografía:** *Playfair Display* (títulos) y *Montserrat* (texto).

**Clases de componente reutilizables** (`src/index.css`): `.container-x`, `.eyebrow`, `.title-xl`, `.btn-primary`, `.btn-outline`, `.spaced` y `.hp-field`.

## Accesibilidad

- Enlace «Saltar al contenido» en el layout.
- Roles y atributos ARIA en diálogos, grupos de opciones (`radiogroup`) y formularios (`aria-invalid`, `aria-describedby`, `aria-busy`).
- Mensajes de estado y error con `role="status"` / `role="alert"`.
- Indicador de foco visible mediante `:focus-visible`.
- Documento en español (`lang="es"`).

## SEO, GEO y rendimiento

**En desarrollo**, cada ruta actualiza `<head>` en el cliente con `PageMeta` (`react-helmet-async`).

**En producción** (`pnpm run build`):

1. `prebuild` → `sitemap.xml` y `robots.txt` en `public/` (URLs desde `VITE_SITE_URL` + catálogo en `products.js`).
2. Build cliente + bundle SSR (`entry-server.jsx`).
3. `prerender.mjs` → HTML por ruta en `dist/` (`/`, `/tienda`, `/nosotros`, `/contacto`, `/producto/:id`).

**Rutas no prerenderizadas:** variantes de `/tienda` con query (`?q=`, filtros, `page`); canonical de tienda apunta a `/tienda`.

**Datos estructurados:** `Organization` + `ClothingStore` (layout), `WebSite` + `SearchAction` (inicio), `Product` + breadcrumbs (ficha), `FAQPage` (contacto).

**Nuevo producto:** al añadir un ítem en `products.js`, el siguiente `build` actualiza sitemap y la carpeta `dist/producto/<id>/`.

## Despliegue

1. En el hosting, define **`VITE_SITE_URL`**, `VITE_API_URL` y `VITE_WHATSAPP_NUMBER` **antes** de compilar.
2. Genera el build:

   ```bash
   pnpm run build
   ```

3. Publica el contenido de `dist/` (incluye HTML prerenderizado, `sitemap.xml`, `robots.txt` y assets).

El proyecto incluye `public/_redirects` (Netlify) y `vercel.json` para rutas que no tengan archivo estático. Con prerender, el host suele servir primero `tienda/index.html`, `producto/.../index.html`, etc.

Fallback SPA (si aplica):

<details>
<summary><strong>Netlify</strong> — <code>public/_redirects</code></summary>

```text
/*  /index.html  200
```

</details>

<details>
<summary><strong>Vercel</strong> — <code>vercel.json</code></summary>

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

</details>

<details>
<summary><strong>Nginx</strong></summary>

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

</details>

Recuerda actualizar `FRONTEND_ORIGIN` en el backend con el dominio de producción.

## Estado del proyecto y pendientes

- [ ] Reemplazar las **imágenes de demostración** (recortadas de las vistas de referencia, baja resolución) por las fotografías definitivas.
- [x] Logotipo y favicon originales en `public/logo/logos.png` y `favicon.png`.
- [ ] Ajustar `VITE_SITE_URL` al dominio final (p. ej. `https://eliecomoda.com`) antes del deploy de producción.
- [ ] Completar enlace de TikTok en `src/config/site.js` (hoy `#`).
- [ ] Añadir testimonios reales en la sección Comunidad de *Nosotros* (hoy hay un bloque editorial).
- [ ] Crear las páginas de políticas enlazadas en el pie de página (envíos, pagos, cambios y devoluciones, términos y privacidad).
- [ ] Reemplazar el catálogo local por una API de productos.

## Licencia

Proyecto propietario de **ELIECO**. Todos los derechos reservados, salvo que se indique lo contrario en este repositorio.
