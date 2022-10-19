import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import styles from "../styles/components/layout.module.scss"

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
            {children}
        <Footer />
    </>
  )
}

export default Layout