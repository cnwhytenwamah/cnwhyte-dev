import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cnwhyte - Frontend Developer',
  description: 'Portfolio website showcasing my work as a full stack developer',
  keywords: ['developer', 'portfolio', 'web development', 'next.js'],
  authors: [{ name: 'Nwamah Clinton' }],
  openGraph: {
    title: 'Nwamah Clinton - Frontend Developer',
    description: 'Portfolio website showcasing my work',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          <GoogleAnalytics />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}