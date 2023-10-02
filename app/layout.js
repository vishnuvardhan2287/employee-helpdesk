import './globals.css'
import { Inter } from 'next/font/google'

//Components
import Navbar from './components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Employee HelpDesk',
  description: 'Created By Vishnuvaradhan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
