import Head from 'next/head'
import React from 'react'

import { APP_NAME } from '../data'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen mx-auto max-w-7xl flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
