import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../favicon.ico'

export default class extends React.Component {
  render() {
    const { title, description, cardDescription } = this.props
    const vscodeLogo =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/512px-Visual_Studio_Code_1.18_icon.svg.png"

    return (
      <Helmet
        title={title}
        link={[{ rel: 'shortcut icon', href: `${favicon}` }]}
      >
        <meta name="Description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="lannonbr" />
        <meta name="twitter:image" content={vscodeLogo} />
        <meta name="twitter:description" content={cardDescription} />
        <meta name="twitter:title" content={title} />
      </Helmet>
    )
  }
}