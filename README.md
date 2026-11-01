# FrontEnd_Elieco

Frontend de **ELIECO Moda** con [Next.js](https://nextjs.org) (App Router), React, TypeScript y Tailwind CSS. Se conecta al backend en `../../backend/BackEnd_Elieco`.

## Requisitos

- Node.js 18+
- Backend en ejecución (puerto por defecto **5000**)

## Configuración

1. Copia el ejemplo de variables de entorno:

   ```bash
   cp .env.local.example .env.local
   ```

2. En el **backend**, permite el origen del frontend (Next.js usa el puerto **3000** por defecto). En `backend/BackEnd_Elieco/.env`:

   ```env
   FRONTEND_ORIGIN=http://localhost:3000
   ```

   Si ya tenías `http://localhost:5173` (Vite), cámbialo o añade ambos separados por coma.

## Desarrollo local

Terminal 1 — backend:

```bash
cd ../../backend/BackEnd_Elieco
npm run dev
```

Terminal 2 — frontend:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La página de inicio muestra si `/api/health` responde.

## Estructura

| Ruta | Descripción |
|------|-------------|
| `src/app/` | Rutas y layouts (App Router) |
| `src/components/` | UI reutilizable |
| `src/lib/api/` | Cliente HTTP hacia el backend |
| `src/types/` | Tipos alineados con el contrato del API |

## API del backend

- `GET /api/health` — comprobación de servicio
- `POST /api/contact` — formulario de contacto (JSON, CORS solo desde orígenes permitidos)

Variables públicas del frontend:

- `NEXT_PUBLIC_API_URL` — URL base del backend (sin barra final)

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run start` — servir build
- `npm run lint` — ESLint
