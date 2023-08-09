import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'Home page',
  description: 'Job point',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
