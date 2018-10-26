import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../favicon.ico'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import moment from 'moment'
import styled from 'styled-components'

const TagContainer = styled.div`
  margin: 0 150px;

  li {
    margin-bottom: 10px;
  }

  h1 {
    text-align: center;
  }

  .all {
    display: block;
    text-align: center;
    margin: 30px 0;
    font-weight: 600;
    text-decoration: none;
  }

  .all:hover {
    text-decoration: underline white;
  }

  @media (max-width: 700px) {
    margin: 0;
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const siteTitle = data.site.siteMetadata.title
  const tagHeader = `Tag: ${tag} (${totalCount} post${totalCount === 1 ? "" : "s"})`

  return (
    <Layout>
      <TagContainer>
        <Helmet
          title={`Tag: ${tag} | ${siteTitle}`}
          link={[{ rel: 'shortcut icon', href: `${favicon}` }]}
        >
          <meta
            name="Description"
            content={`Posts with the ${tag} tag`}
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="lannonbr" />
          <meta
            name="twitter:image"
            content="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/512px-Visual_Studio_Code_1.18_icon.svg.png"
          />
          <meta
            name="twitter:description"
            content={`Posts with the ${tag} tag`}
          />
          <meta name="twitter:title" content={`Tag: ${tag} | ${siteTitle}`} />
        </Helmet>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const title = node.frontmatter.title
            const slug = node.fields.slug
            const date = moment(node.frontmatter.date).format('ll')
            return (
              <li key={slug}>
                <Link to={slug}>{title} - {date}</Link>
              </li>
            )
          })}
        </ul>
        <Link class="all" to="/tags">All Tags</Link>
      </TagContainer>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 500
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`