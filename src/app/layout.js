"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Providers} from '@/app/provider'
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
      <Providers>
        {children}
        </Providers>
        
        </body>
    </html>
  )
}
