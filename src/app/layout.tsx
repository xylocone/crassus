// Internal dependencies
import './globals.css'

export const metadata = {
  title: 'Crassus',
  description: 'A chat app powered by Firebase, Next.js, Typescript and Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
