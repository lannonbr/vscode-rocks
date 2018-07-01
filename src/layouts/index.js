import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import vscodeIcon from './vscode_icon.svg'
import 'prismjs/themes/prism-tomorrow.css'
import './index.css'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 500;
    display: flex;
    flex: 1;
    align-items: center;
    margin-top: 0;
  }

  img {
    max-height: 80px;
    margin-right: 30px;
    margin-bottom: 0;
  }

  ul {
    padding: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    img {
      max-height: 50px;
    }

    h1 {
      font-size: 20px;
    }

    ul li {
      font-size: 16px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`

const Footer = () => (
  <div
    style={{
      textAlign: 'center',
      marginTop: 40,
    }}
  >
    <p>Posts released every monday at 8AM EST</p>
    <p>
      Made with ❤️ by{' '}
      <a style={{ color: 'inherit' }} href="https://lannonbr.com">
        Benjamin Lannon
      </a>{' '}
      and hosted on{' '}
      <a style={{ color: 'inherit' }} href="https://www.netlify.com/">
        Netlify
      </a>
    </p>
  </div>
)

class Template extends React.Component {
  render() {
    const { children } = this.props
    let header = (
      <Header>
        <h1>
          <img src={vscodeIcon} />
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            VS Code Weekly
          </Link>
        </h1>
        <ul
          style={{
            display: 'flex',
            listStyleType: 'none',
            color: 'white',
          }}
        >
          <li>
            <Link>Archive</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </Header>
    )

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '113rem',
          padding: `2.625rem 1.3125rem`,
        }}
      >
        {header}
        {children()}
        <Footer />
      </div>
    )
  }
}

export default Template
