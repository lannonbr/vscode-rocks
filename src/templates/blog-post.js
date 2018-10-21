import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import styled from 'styled-components'
import moment from 'moment'
import favicon from '../favicon.ico'
import 'gatsby-remark-vscode-embed/style.css'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPostContainer = styled.div`
  margin: 0 80px;

  p {
    line-height: 1.6;
  }

  .topImg {
    margin: 0 100px;
  }

  @media (max-width: 700px) {
    margin: 0 10px;

    .topImg {
      margin: 0;
    }
  }

  article {
    img {
      max-width: 100%;
    }

    img[src$='.gif'] {
      display: block;
      margin: 0 auto;
    }
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const dateTime = moment(post.frontmatter.date).format('YYYY-MM-DD')

    return (
      <Layout>
        <BlogPostContainer>
          <Helmet
            title={`${post.frontmatter.title} | ${siteTitle}`}
            link={[{ rel: 'shortcut icon', href: `${favicon}` }]}
          >
            <meta
              name="Description"
              content={`${post.frontmatter.description}`}
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="lannonbr" />
            <meta
              name="twitter:image"
              content="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/512px-Visual_Studio_Code_1.18_icon.svg.png"
            />
            <meta
              name="twitter:description"
              content={this.props.data.markdownRemark.excerpt}
            />
            <meta name="twitter:title" content={post.frontmatter.title} />
          </Helmet>
          <h1 style={{ textAlign: 'center' }}>{post.frontmatter.title}</h1>
          <time
            dateTime={dateTime}
            style={{
              display: 'block',
              textAlign: 'center',
            }}
          >
            {post.frontmatter.date}
          </time>
          <Img
            alt="Blog post header image"
            className="topImg"
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
          <h1>Table of Contents</h1>
          <article dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
          <hr />
          <article dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          <p style={{ textAlign: 'center' }}>
            Stay tuned to the next issue, next Sunday
          </p>
        </BlogPostContainer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
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
`
