import type { Metadata } from 'next'
import {Navbar } from '@/components';
import './globals.css'


export const metadata: Metadata = {
  title: 'CoureraAt',
  description: 'Your choice of learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        </body>
    </html>
  )
}
