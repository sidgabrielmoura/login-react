import './globals.css'
import { Inter, Noto_Sans as noto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const notoSans = noto({ subsets: ['latin'], weight: "300", variable: '--font-Noto'})

export const metadata = {
  title: 'Mar & Sol',
  description: 'criado em tailwind, typescript, next e react',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>{children}</body>
    </html>
  )
}
