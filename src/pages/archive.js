import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEOHelmet from '../components/SEOHelmet'
import Container from '../components/Container'

const ArchiveContainer = styled(Container)`
  li {
    margin-bottom: 10px;
  }
`
export default function Archive(props) {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEOHelmet
        title={'Archive | VS Code Rocks'}
        description={'All Posts on VS Code Rocks'}
        cardDescription={'All Posts on VS Code Rocks'}
      />
      <ArchiveContainer>
        <h1>Archive</h1>
        <ul>
          {posts.map(({ node }) => {
            return (
              <li key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  {node.frontmatter.title} - {node.frontmatter.date}
                </Link>
              </li>
            )
          })}
        </ul>
      </ArchiveContainer>
    </Layout>
  )
}

export const archiveQuery = graphql`
  query ArchiveQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
