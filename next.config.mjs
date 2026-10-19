// En Vercel el sitio se construye normal (con la API de contacto).
// Con GITHUB_PAGES=true se genera un export estático para GitHub Pages,
// servido bajo /portafolio.
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGithubPages ? '/portafolio' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubPages && {
    output: 'export',
    basePath,
    trailingSlash: true,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_IS_GITHUB_PAGES: isGithubPages ? 'true' : '',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
