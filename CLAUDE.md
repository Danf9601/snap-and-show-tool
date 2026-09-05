# CLAUDE.md — Contexto del proyecto para Claude Code

Portafolio personal de **Daniel Forero** — senior UX/UI Designer & Front End Developer, 8+ años de experiencia, Bogotá. Este archivo es contexto persistente para cualquier sesión de Claude Code que trabaje en este repo. Léelo completo antes de tocar código.

**Ojo con Kinetik Studio**: Daniel trabaja ahí como Front End Developer, UX/UI Designer y estratega de IA — **no es dueño ni fundador** del estudio. Es el único caso del portafolio con esta distinción (Serenia sí es 100% suyo). No redactes ni edites copy que lo presente como propietario ("mi estudio", "fundé", "mi empresa").

## Cómo se está construyendo este sitio (importante para no duplicar trabajo)

Este repo se edita desde **dos frentes en paralelo**:
1. **Cursor + Claude Code (local, este entorno)** — ediciones de código directas, commits y push a `main`.
2. **Una sesión de Claude en Cowork** (con acceso al Lovable MCP y a Behance) — hace research real en el Behance de Daniel (`behance.net/danielforero11`), verifica contenido, y entrega prompts consolidados como el que generó el estado actual de `src/data/projects.ts`.

Las dos sincronizan por GitHub: **Lovable tiene two-way sync nativo sobre la rama `main`** — cualquier push a `main` dispara un rebuild automático del preview de Lovable, y Lovable nunca necesita credenciales tuyas. No hay necesidad de tocar nada del lado de Lovable manualmente.

**No inventes contenido de proyectos.** Todo el copy de los case studies (`features`, `stats`, `findings`, `tools`, `process`) viene de haber revisado el Behance real de Daniel, screenshot por screenshot. Si necesitas agregar o cambiar contenido de un proyecto y no tienes la fuente real, dilo explícitamente en vez de rellenar con texto genérico.

## Stack

- **TanStack Start** (React 19, SSR + prerender) + **TanStack Router** (rutas por archivo en `src/routes/`, `src/routeTree.gen.ts` es autogenerado — nunca lo edites a mano).
- **Vite 8** + `@tailwindcss/vite` (Tailwind v4, config inline en `src/styles.css` vía `@theme`, no hay `tailwind.config.js`).
- **shadcn/ui** sobre Radix — componentes en `src/components/ui/*`, no tocar salvo que el propio shadcn los regenere.
- Gestor de paquetes: **bun** (`bun.lock` es el lockfile real), pero los scripts de `package.json` corren con los comandos estándar:
  - `bun run dev` — servidor local.
  - `bun run build` — build de producción.
  - `bun run lint` — ESLint.
  - `bun run format` — Prettier.

## Sistema de diseño — "Midnight Pro"

Dark-only, glassmorphism, acento cian único. Todos los tokens viven en `src/styles.css` (`:root` + `@theme inline`). **Nunca hardcodees un color** — usa las variables:

- Fondos: `--bg-base` (#050507), `--bg-surface` (#0a0a0f), `--bg-raised` (#14141b), `--bg-overlay` (#0f0f15).
- Texto: `--text-primary` (#f4f4f8), `--text-secondary` (#8b8b9e), `--text-tertiary` (#5a5a6b), `--text-on-accent` (#050507).
- Acento: `--accent-default` (#22d3ee, cian), `--accent-hover` (#67e8f9), `--accent-muted` (#083344).
- Glass: `--glass-fill` (rgba blanco 6%), `--glass-stroke` (rgba blanco 12%) — recipe estándar: `background: var(--glass-fill); border: 1px solid var(--glass-stroke); backdrop-filter: blur(24px)`.
- Bordes: `--border-default` (12% blanco), `--border-subtle` (8% blanco), `--border-focus` (= accent).
- Estado: `--success` (#34d399), `--warning` (#fbbf24), `--danger` (#f87171).
- Tipografía: `--font-display` = Space Grotesk (headings), `--font-sans` = Inter (body/UI), `--font-mono` = JetBrains Mono (datos/labels/código).
- Radios: sm=6px, md=8px, lg=12px (default), xl=16px.
- Serenia (proyecto flagship) tiene 2 tokens propios fuera de la paleta principal: `--color-serenia-violet` (#8b5cf6) y `--color-serenia-emerald` (#34d399) — solo se usan en ese case study.

Covers de proyecto: **100% SVG generativo en código**, en `src/components/portfolio/ProjectCover.tsx`, switcheado por la key `cover` de cada proyecto. Cero imágenes de terceros ahí — es una regla de diseño explícita del portafolio (Awwards-style, todo construido, nada pegado).

**Única excepción a "cero imágenes externas":** el `ClientBadge` (ver abajo) — logos de marca reales de clientes, usados chicos como sello de autenticidad junto al título del case study, no como pieza visual principal.

## Mapa de archivos clave

- `src/data/projects.ts` — fuente de verdad de todos los proyectos. Tipo `Project` + array `PROJECTS` + helper `getProject(slug)`.
- `src/routes/work.$slug.tsx` — template de detalle de case study. Renderiza condicionalmente: Overview + `ClientBadge` (si `clientLogo` existe) → Features (checklist, título varía según `tags`: "Qué incluye el sitio" para Web Design/Art Direction, "Qué hace el producto" para el resto) → Stats (bento) → Process (pasos numerados) → Pain points (barras) → Findings → Tools → Way of Work → botón volver a Work.
- `src/components/portfolio/Work.tsx` — grid de la sección Work en home, linkea a `/work/$slug`.
- `src/components/portfolio/ProjectCover.tsx` — covers generativos SVG, switch por `cover` key.
- `src/components/portfolio/ClientBadge.tsx` — badge de logo real de cliente. Tiene un mapa interno `CLIENT_LOGOS` que traduce la string de `clientLogo` (ej. `"tul"`) al import real de la imagen en `src/assets/logos/`. **Si agregas un logo nuevo, tienes que agregarlo tanto al import + `CLIENT_LOGOS` de `ClientBadge.tsx` como al campo `clientLogo` del proyecto en `projects.ts`.**
- `src/routes/index.tsx` — composición de la home (`Hero`, `Work`, `UILab`, `DesignSystems`, `Expertise`, `About`, `Contact`) + meta tags + JSON-LD schema.org Person (con `sameAs` a Behance/GitHub reales).
- `src/components/portfolio/Hero.tsx`, `About.tsx` — bio y timeline de carrera. **Ya actualizados** a "Senior UX/UI Designer & Front End Developer, 8+ years" (ver Estado actual abajo).
- `vite.config.ts` — config de build. Contiene **`PROJECT_PATHS`, una lista hardcodeada de todas las rutas `/work/<slug>` para el prerender de TanStack Start**. ⚠️ Es una lista separada de `PROJECTS` en `projects.ts` — si agregas un proyecto nuevo, tienes que agregar su ruta AQUÍ TAMBIÉN o no se va a prerenderizar (va a dar 404 en el sitio estático).
- `.github/workflows/deploy-pages.yml` — CI que builda con `GITHUB_PAGES=true` (activa `base: "/snap-and-show-tool/"` y el `routerBasepath` en `vite.config.ts`), copia el shell SPA como `404.html` (truco estándar para que rutas profundas funcionen en GitHub Pages), y publica a GitHub Pages. El deploy de Lovable (preview `id-preview--...lovable.app`) es independiente y no usa este workflow.

## Estado actual de los 10 proyectos (para no repetir trabajo)

| slug | Contenido | clientLogo | Notas |
|---|---|---|---|
| `kinetik` | Flagship, completo (features, stats, process, findings, tools) | — | No viene de Behance. Daniel trabaja ahí (front/UX/IA) — no es dueño |
| `serenia` | Flagship, completo (features, stats, process, findings, tools), producto 100% propio de Daniel | — | No viene de Behance |
| `launch-mobility` | Completo (stats, process, painPoints, findings, tools) | — | Verificado contra Behance real |
| `tul` | Completo (stats, features, process, tools, wayOfWork) | ✅ `tul` | Verificado |
| `snappr-ai` | Completo (features, process, findings, tools) | ✅ `snappr` | Verificado — status `IN PROGRESS`, sin stats (es concepto/research, no producción) |
| `mercado-pago` | Completo (features, process, tools) | ✅ `mercado-pago` | Verificado |
| `claude-figma` | Completo (stats, features, findings, tools) | — | No tengo logo real de este |
| `ontop` | Completo (features, tools) | ✅ `ontop` | Sin `process` a propósito — el case study en Behance es 100% landing visual, no documenta metodología |
| `commdesk` | Completo (features, tools) | — | Mismo caso que Ontop — sin logo, sin process documentado |
| `angelemus` | Completo (features, tools) | — | Contenido viene de material que Daniel pasó directo, no está publicado en su Behance actual |

## Pendiente / próximos pasos conocidos

- **Logo "Liberty Latin America"**: Daniel tiene el archivo `Liberty Latin America Logo.png` en su carpeta de Assets. Es un cliente real (probablemente ligado a **FLOW**, marca de telecom del Caribe que aparece en la franja de logos de clientes dentro del case study de Snappr AI en Behance — junto a Ontop, Tul y "+móvil"). **No hay case study de este cliente en el portafolio todavía.** Si Daniel confirma el proyecto/contexto, hay que: (1) decidir si es un case study nuevo o parte de uno existente, (2) agregarlo a `PROJECTS` en `projects.ts`, (3) agregarlo a `PROJECT_PATHS` en `vite.config.ts`, (4) agregar su logo a `ClientBadge.tsx`.
- Secciones del sitio aún no auditadas a fondo contra contenido real: `UILab.tsx`, `DesignSystems.tsx`, `Expertise.tsx` — no se ha verificado si su contenido necesita profundizarse igual que se hizo con Work.
- El README y AGENTS.md del repo son cortos — si quieres que Claude Code lea instrucciones de Lovable, están en `AGENTS.md` (contiene la advertencia estándar de Lovable sobre no reescribir historia git en la rama sincronizada).

## Gotchas conocidos

- **Line endings**: el repo se normalizó a LF vía `.gitattributes` (agregado en el commit `f5d7019`). Si `git status` alguna vez muestra decenas de archivos "modificados" con miles de líneas +/− en cantidades idénticas, es casi seguro CRLF de Windows, no contenido real — revisa con `git diff --stat` antes de commitear nada así.
- **Nunca fuerces `git push --force` ni reescribas historia** en `main` — Lovable tiene sync nativo sobre esa rama y romperlo puede perder el historial del proyecto del lado de Lovable (advertencia explícita en `AGENTS.md`).
- `src/routeTree.gen.ts` es autogenerado por TanStack Router — no lo edites a mano, se regenera solo al correr dev/build.
- Todo el copy nuevo va en español, mismo tono directo/técnico del resto del sitio — sin relleno de marketing genérico.
