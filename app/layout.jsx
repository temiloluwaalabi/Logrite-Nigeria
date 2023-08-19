import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'
import BackToTop from '@/components/BackToTop'

export const metadata = {
  title: 'Logrite Nigeria Limited',
  description: 'Logrite Nigeria Limited is a pioneering Nigerian company, proudly serving diverse industries with excellence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
        {children}
        <BackToTop />
        </main>
        <Footer />
      </body>
    </html>
  )
}
