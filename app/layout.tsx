import type { Metadata } from 'next'
import { Poppins as NextPoppins } from 'next/font/google'

import './globals.css'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

const LocalPoppins = NextPoppins({ 
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
 })

export const metadata: Metadata = {
  title: 'Evently',
  description: "Evently is a World's best platform for Event Managment",
  icons: {
    icon: '/assets/images/logo.svg'
  }  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Header />
    <body className={LocalPoppins.variable}>{children}</body>
    <Footer />
    </html>
  )
}
