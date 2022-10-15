import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='layout'>
       <head>
        <title>Rishabh Store</title>
       </head>
       <header>
        <Navbar/>
       </header>
       <main className='main-container'>
       {children}
       </main>
       <Footer/>
    </div>
  )
}

export default Layout
