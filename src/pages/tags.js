import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../favicon.ico'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'

const TagContainer = styled.div`
  margin: 0 150px;

  h1 {
    text-align: center;
  }

  li {
    margin-bottom: 10px;
  }

  @media (max-width: 700px) {
    margin: 0;
  }
`

const TagsPage = ({ data }) => {
  const tags = data.allMarkdownRemark.group
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <TagContainer>
        <Helmet
          title={`All Tags | ${siteTitle}`}
          link={[{ rel: 'shortcut icon', href: `${favicon}` }]}
        >
          <meta
            name="Description"
            content={`List of Tags`}
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="lannonbr" />
          <meta
            name="twitter:image"
            content="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/512px-Visual_Studio_Code_1.18_icon.svg.png"
          />
          <meta
            name="twitter:description"
            content={`List of Tags`}
          />
          <meta name="twitter:title" content={`All Tags | ${siteTitle}`} />
        </Helmet>

        <h1>All Tags</h1>

        <ul>
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${_.kebabCase(tag.fieldValue)}`}>
                {tag.fieldValue} ({tag.totalCount})
            </Link>
            </li>
          ))}
        </ul>
      </TagContainer>
    </Layout>
  )
}

export default TagsPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark( limit: 2000 ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`