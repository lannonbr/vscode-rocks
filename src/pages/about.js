import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  margin: 0 150px;

  @media (max-width: 700px) {
    margin: 0;
  }
`
class About extends React.Component {
  render() {
    return (
      <AboutContainer>
        <h1 style={{ textAlign: 'center' }}>About</h1>
        <p>
          Visual Studio Code has been around for over 2 years since the 1.0
          release and the team has continually pushed for a cycle of pushing a
          new update to the project one a month and bring features to
          continually improve the editing experience.
        </p>
        <p>
          VS Code Weekly will be a weekly update on things going on in VS Code
          as well as ways to enhance your productivity through quick tips and
          extensions.
        </p>
      </AboutContainer>
    )
  }
}

export default About
