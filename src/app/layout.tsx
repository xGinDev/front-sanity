import Menu from '@/components/header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/menu/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog VTEX',
  description: 'Blog For VTEX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <div className="grid lg:grid-cols-[20%_80%] h-screen">
          <div className=""><Menu /></div>
          <div className="overflow-auto">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
