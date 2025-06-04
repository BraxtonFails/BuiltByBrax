import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import { Analytics } from '@vercel/analytics/react';
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Built By Brax',
  description: 'Custom Web Development for Small Businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.theme === 'light') {
                document.documentElement.classList.remove('dark');
              } else {
                document.documentElement.classList.add('dark');
              }
            } catch (_) {}
          `,
        }} />
      </head>
      <body className={`${inter.className} bg-[#020817] text-white`}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
