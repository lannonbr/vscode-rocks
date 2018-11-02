import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import moment from 'moment'
import styled from 'styled-components'
import SEOHelmet from '../components/SEOHelmet'

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
      <SEOHelmet
        title={`Tag: ${tag} | ${siteTitle}`}
        description={`Posts with the ${tag} tag`}
        cardDescription={`Posts with the ${tag} tag`}
      />
      <TagContainer>
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