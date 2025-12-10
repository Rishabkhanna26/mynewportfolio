import './globals.css'
import PageLoader from '@/components/PageLoader'

export const metadata = {
  title: 'My New Portfolio',
  description: 'Rebuilt Next.js App Router project'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}
