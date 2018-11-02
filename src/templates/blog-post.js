import React from 'react'
import get from 'lodash/get'
import Img from 'gatsby-image'
import styled from 'styled-components'
import moment from 'moment'
import 'gatsby-remark-vscode-embed/style.css'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import _ from 'lodash'
import SEOHelmet from '../components/SEOHelmet'

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
        <SEOHelmet
          title={`${post.frontmatter.title} | ${siteTitle}`}
          description={post.frontmatter.description}
          cardDescription={post.excerpt}
        />
        <BlogPostContainer>
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
          <div>
            <b style={{ marginRight: 10 }}>Tags:</b>
            {post.frontmatter.tags.map(tag => {

              return (
                <span style={{ marginRight: 10 }} key={tag}>
                  <Link to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>,
                </span>
              )
            })}
          </div>
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
        tags
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
