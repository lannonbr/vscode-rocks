import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import vscodeIcon from '../vscode_icon.svg'

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
    width: 100%;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  img {
    max-height: 80px;
    margin-right: 30px;
    margin-bottom: 0;
  }

  ul {
    display: flex;
    padding: 0;
    list-style-type: none;
    color: white;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    img {
      max-height: 50px;
    }

    h1 {
      font-size: 28px;
      justify-content: center;
    }

    ul li {
      font-size: 18px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`

export default function() {
  return (
    <Header>
      <h1>
        <img alt="VS Code Logo" src={vscodeIcon} />
        <Link to={'/'}>VS Code Rocks</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/archive">Archive</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Header>
  )
}
