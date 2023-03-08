'use client'
import GlobalStyle from '@/styles/globalStyles'
import { theme } from '@/styles/theme'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <html lang="en">
          <body>
            {children}
            <div>
              <ToastContainer autoClose={3000} />
            </div>
          </body>
        </html>
      </ThemeProvider>
    </>
  )
}
