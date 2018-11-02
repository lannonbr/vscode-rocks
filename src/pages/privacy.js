import React from 'react'
import Layout from '../components/layout'
import SEOHelmet from '../components/SEOHelmet'
import Container from '../components/Container'

class Privacy extends React.Component {
  render() {
    return (
      <Layout>
        <SEOHelmet
          title={'Privacy Policy | VS Code Rocks'}
          description={'VS Code Rocks Privacy Policy & Data Usage terms'}
          cardDescription={'VS Code Rocks Privacy Policy & Data Usage terms'}
        />
        <Container>
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
        </Container>
      </Layout>
    )
  }
}

export default Privacy
