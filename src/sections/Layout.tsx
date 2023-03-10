import Head from 'next/head'
import React from 'react'

import { APP_NAME } from '../data'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen mx-auto w-full flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 w-full">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
