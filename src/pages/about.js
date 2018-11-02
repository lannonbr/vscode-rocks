import React from 'react'
import styled from 'styled-components'
import profilePic from './profile.jpg'
import SEOHelmet from '../components/SEOHelmet'
import Layout from '../components/layout'
import Container from '../components/Container'

const AuthorContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  margin-bottom: 20px;

  img {
    margin-right: 20px;
    width: 380px;
    flex: 1;
  }

  p {
    margin: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 1000px) {
    display: block;
    width: 100%;

    img {
      width: 100%;
      margin: 0;
      margin-bottom: 20px;
    }
  }
`
class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEOHelmet
          title={'About | VS Code Rocks'}
          description={'VS Code Rocks About page'}
          cardDescription={'VS Code Rocks About page'}
        />
        <Container>
          <h1>About VS Code Rocks</h1>
          <p>
            Visual Studio Code has been around for over 2 years since the 1.0
            release and the team has continually pushed for a cycle of pushing a
            new update to the project one a month and bring features to
            continually improve the editing experience.
          </p>
          <p>
            VS Code Rocks will be a weekly updated site on things going on in VS
            Code as well as ways to enhance your productivity through quick tips
            and extensions.
          </p>
          <h1>About the Author</h1>
          <AuthorContainer>
            <img src={profilePic} alt="Benjamin Lannon portrait" />
            <div>
              <p>
                I'm Benjamin Lannon. A Web Developer based in Upstate NY. As
                someone who has become fairly advanced in learning about VS
                Code, I wanted to create a blog to share my information that I
                know about the editor to the developer community.
              </p>

              <p>
                I've also written a couple of VS Code Extensions including{' '}
                <a href="https://marketplace.visualstudio.com/items?itemName=lannonbr.vscode-js-annotations">
                  JS Parameter Annotations
                </a>{' '}
                and{' '}
                <a href="https://marketplace.visualstudio.com/items?itemName=lannonbr.vscode-teddy-snippets">
                  Teddy Snippets
                </a>
              </p>
              <p>
                You can find me on{' '}
                <a href="https://github.com/lannonbr">Github</a> and{' '}
                <a href="https://twitter.com/lannonbr">Twitter</a>
              </p>
            </div>
          </AuthorContainer>
        </Container>
      </Layout>
    )
  }
}

export default About
