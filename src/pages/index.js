import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import * as Icon from 'react-feather'
import PostPreview from '../components/PostPreview'
import Layout from '../components/layout'
import SEOHelmet from '../components/SEOHelmet'
import Flex from '../components/Flex'

const BlogContainer = styled.main`
  p.topText {
    text-align: center;
    font-size: 26px;
    line-height: 1.4;
    padding: 0 40px;
  }

  article:last-of-type {
    hr {
      display: none;
    }
  }

  @media (max-width: 700px) {
    p.topText {
      font-size: 18px;
      padding: 0;
    }
  }

  h2.thisMonth {
    text-align: center;
    margin: 60px 0 30px 0;
    text-decoration-line: underline;
  }
`

export default function BlogIndex(props) {
  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allMarkdownRemark.edges.slice(0, 5) // Grab 5 newest posts

  const description =
    'Homepage for VS Code Rocks: A weekly blog on everything related to the Visual Studio Code text editor'

  return (
    <Layout>
      <SEOHelmet
        title={siteTitle}
        description={description}
        cardDescription={description}
      />
      <BlogContainer>
        <p className="topText">
          A place for weekly news on the newest features and updates to Visual
          Studio Code as well as trending extensions and neat tricks to
          continually improve your VS Code skills.
        </p>
        <h2 className="thisMonth">New Posts</h2>
        {posts.map(({ node }) => {
          return <PostPreview key={node.fields.slug} post={node} />
        })}

        <h2 style={{ textAlign: 'center' }}>
          <Link to="/archive">
            <Flex inline alignCenter>
              <Icon.Archive style={{ marginRight: 10 }} />
              Archive
            </Flex>
          </Link>
        </h2>
      </BlogContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
