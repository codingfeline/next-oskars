'use client'

import Header from '@components/layout/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@components/layout/Footer'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Next Oskars',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const path = usePathname()
  return (
    <html lang="en">
      <body
        className={`flex_screen  bg-red-100 justify-cente items-center text-center
        md:bg-lime-100
        lg:bg-blue-200
                ${inter.className}
                ${path === '/' && 'md:bg-red-100'}
                ${path === '/photos' && 'md:bg-green-100'}
                ${path === '/locate-us' && 'md:bg-indigo-100'}
                `}
      >
        <div
          className="flex flex-col min-h-screen bg-indigo-300 
        md:w-11/12 
        lg:w-5/6  
        w-full "
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
