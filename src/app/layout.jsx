import { Open_Sans } from 'next/font/google'
import './globals.css'
import EnglishHeader from '@/components/English/Navbar/EnglishHeader'
import ArabicNavbar from '@/components/Arabic/Navbar/Arabicnavbar'
import { LanguageProvider } from '@/context/LanguageContext'
import { UserProvider } from '@/context/UserContext'
import { CookiesProvider } from 'next-client-cookies/server';
import { AuthContextProvider } from '@/context/AuthContext'
import Head from 'next/head'
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Bull And Bearz',
  description: 'Navigating the Markets with Insightful Consultancy',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='/favicon.ico'  />
      </Head>
      <body className={openSans.className}>
      <AuthContextProvider>
      <CookiesProvider>
       <UserProvider>
       <LanguageProvider>
        
        <div>

        <EnglishHeader/>
        
        {/* <ArabicNavbar/> */}
        {children}
        </div>
        </LanguageProvider>
        </UserProvider>
  </CookiesProvider>
  </AuthContextProvider>
        </body>
    </html>
  )
}
