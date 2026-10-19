import type { Metadata, Viewport } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { asset } from '@/lib/asset'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: 'Portfolio | Desarrollador Full Stack',
  description: 'Desarrollador Full Stack especializado en crear experiencias web innovadoras con tecnologías de vanguardia. React, Next.js, Node.js y más.',
  generator: 'v0.app',
  keywords: ['desarrollador', 'full stack', 'react', 'next.js', 'web developer', 'portfolio'],
  authors: [{ name: 'Developer' }],
  openGraph: {
    title: 'Portfolio | Desarrollador Full Stack',
    description: 'Transformo ideas en soluciones digitales con código limpio y diseño impactante.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: asset('/icon-light-32x32.png'),
        media: '(prefers-color-scheme: light)',
      },
      {
        url: asset('/icon-dark-32x32.png'),
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: asset('/icon.svg'),
        type: 'image/svg+xml',
      },
    ],
    apple: asset('/apple-icon.png'),
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased cursor-none md:cursor-none`}>
        {children}
        {process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_IS_GITHUB_PAGES && <Analytics />}
      </body>
    </html>
  )
}
