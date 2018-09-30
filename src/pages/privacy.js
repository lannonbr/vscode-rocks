import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const AboutContainer = styled.div`
  margin: 0 150px;

  @media (max-width: 700px) {
    margin: 0;
  }
`
class Privacy extends React.Component {
  render() {
    return (
      <AboutContainer>
        <Helmet title={'Privacy Policy | VS Code Rocks'} />
        <h1>Privacy Policy</h1>
        <p>
          I respect the privacy of the users of this site and I make sure
          personal information is not misused.
        </p>

        <p>
          I register anonymously the traffic data using Google Analytics without
          tracking any IPs.
        </p>

        <p>
          I do not and will not sell any data I collect to any third parties
        </p>
      </AboutContainer>
    )
  }
}

export default Privacy
