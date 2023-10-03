import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import MainContainer from '@/components/MainContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '8base Support Tool',
  description: 'Created for 8base Support Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col lg:block w-full overflow-hidden max-h-screen`}>
        <div className="flex-1 min-h-[calc(100svh-54px)] h-full flex flex-col">
          <div className="flex flex-1 h-full lg:justify-between">
            <div className="flex flex-col items-center w-full h-full">
              {/* navbar */}
              <Navbar />
              <div className="flex flex-col md:flex-row h-full w-full overflow-y-auto md:overflow-y-hidden bg-zinc-100">
                <Sidebar />
                <MainContainer>{children}</MainContainer>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
