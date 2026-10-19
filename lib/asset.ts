// Antepone el basePath (/portafolio en GitHub Pages, vacío en Vercel)
// a las rutas de archivos que viven en /public.
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`

// URL base de la API de contacto. En Vercel es relativa (mismo dominio);
// en GitHub Pages apunta al proyecto de Vercel.
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ""
