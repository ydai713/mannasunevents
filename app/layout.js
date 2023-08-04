import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import Footer from "@/components/Footer"
import InstagramFeed from "@/components/InstagramFeed"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manna Sun Events, Inc. | San Francisco and Vancouver Wedding Planner & Designer',
  description: 'Manna Sun Events is a full-service wedding planning and design company based in San Francisco and Vancouver. We specialize in creating unique and personalized weddings for couples who want to celebrate their love in style.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <InstagramFeed />
        <Footer />
      </body>
    </html>
  )
}
