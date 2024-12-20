import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Krushant Wagh - Portfolio',
  description: 'Materials Engineering Student at IIT Gandhinagar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}