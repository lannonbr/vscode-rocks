import React from 'react'
import { Link } from 'gatsby'
import Header from './header'

import 'prismjs/themes/prism-tomorrow.css'
import './index.css'

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <footer
        style={{
          fontSize: 14,
          textAlign: 'center',
        }}
      >
        &copy; 2018 Benjamin Lannon <Link to="/privacy">Privacy Policy</Link>
      </footer>
    </>
  )
}
