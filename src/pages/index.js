import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import PostPreview from '../components/PostPreview'
import favicon from '../favicon.ico'
import Layout from '../components/layout'

const BlogContainer = styled.div`
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

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges').slice(0, 5) // Grab 5 newest posts

    return (
      <Layout>
        <BlogContainer>
          <Helmet
            title={siteTitle}
            link={[{ rel: 'shortcut icon', href: `${favicon}` }]}
          >
            <meta
              name="Description"
              content="Homepage for VS Code Rocks: A weekly blog on everything related to the Visual Studio Code text editor"
            />
          </Helmet>
          <p className="topText">
            A place for weekly news on the newest features and updates to Visual
            Studio Code as well as trending extensions and neat tricks to
            continually improve your VS Code skills.
          </p>
          <h2 className="thisMonth">New Posts</h2>
          {posts.map(({ node }) => {
            return <PostPreview key={node.fields.slug} post={node} />
          })}

          <h2
            style={{
              textAlign: 'center',
            }}
          >
            <Link to="/archive">Archive</Link>
          </h2>
        </BlogContainer>
      </Layout>
    )
  }
}

export default BlogIndex

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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
