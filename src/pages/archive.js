import React from 'react'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const ArchiveContainer = styled.div`
  margin: 0 150px;

  @media (max-width: 700px) {
    margin: 0;
  }
`

class Archive extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <ArchiveContainer>
          <Helmet title={'Archive | VS Code Rocks'} />
          <h1 style={{ textAlign: 'center' }}>Archive</h1>
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
}

export default Archive

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
