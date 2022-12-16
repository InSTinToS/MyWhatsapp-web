'use client'

import './globals.css'

import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <head />

      <body>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />

          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
