import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEOHelmet from '../components/SEOHelmet'

const AboutContainer = styled.div`
  margin: 0 150px;

  @media (max-width: 700px) {
    margin: 0;
  }
`
class Privacy extends React.Component {
  render() {
    return (
      <Layout>
        <SEOHelmet
          title={'Privacy Policy | VS Code Rocks'}
          description={'VS Code Rocks Privacy Policy & Data Usage terms'}
          cardDescription={'VS Code Rocks Privacy Policy & Data Usage terms'}
        />
        <AboutContainer>
          <h1>Privacy Policy</h1>
          <p>
            I respect the privacy of the users of this site and I make sure
            personal information is not misused.
          </p>

          <p>
            I register anonymously the traffic data using Google Analytics
            without tracking any IPs.
          </p>

          <p>
            I do not and will not sell any data I collect to any third parties
          </p>
        </AboutContainer>
      </Layout>
    )
  }
}

export default Privacy
