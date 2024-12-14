import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Provider from './context/client-provider'
import StoreProvider from './StoreProvider'
import { getServerSession } from "next-auth/next"

export const metadata: Metadata = {
  title: {
    template: '%s - Altered Unique Evaluator',
    default: 'Altered Unique Evaluator',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="text-gray-950 antialiased">
        <Provider session={session!}>
            <StoreProvider>
              {children}
            </StoreProvider>
          </Provider>
      </body>
    </html>
  )
}
