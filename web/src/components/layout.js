import React from 'react'
// import Header from './header'
import Header from "./Header/Header"

import '../styles/layout.css'
import styles from './layout.module.css'
import './main.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <main className="mainContainer">
      <div className={styles.content}>{children}</div>
    </main>

    <footer className="footer">
      <div className="container">
          © {new Date().getFullYear()} Pavel "Ckomop0x"
          Klochkov., Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </div>
    </footer>
  </>
)

export default Layout
