import React from 'react'
import kebabCase from 'lodash/kebabCase'
import Img from 'gatsby-image'
import styled from 'styled-components'
import moment from 'moment'
import 'gatsby-remark-vscode-embed/style.css'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import SEOHelmet from '../components/SEOHelmet'
import * as Icon from 'react-feather'
import Flex from '../components/Flex'

const BlogPostContainer = styled.main`
  margin: 0 80px;

  p {
    line-height: 1.6;
  }

  .vsmarketplace-block img.logo[src=''] {
    display: none;
  }

  .topImg {
    margin: 0 100px;
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

  @media (max-width: 700px) {
    margin: 0 10px;

    .topImg {
      margin: 0;
    }
  }
`

export default function(props) {
  const post = props.data.markdownRemark
  const { excerpt, tableOfContents, html } = post
  const { title, description, date } = post.frontmatter

  const siteTitle = props.data.site.siteMetadata.title
  const sizes = post.frontmatter.image.childImageSharp.fluid
  const dateTime = moment(date).format('YYYY-MM-DD')

  const tagsHtml = post.frontmatter.tags.map((tag, idx, self) => {
    return (
      <span style={{ marginRight: 10 }} key={tag}>
        <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
        {idx === self.length - 1 ? '' : ','}
      </span>
    )
  })

  return (
    <Layout>
      <SEOHelmet
        title={`${title} | ${siteTitle}`}
        description={description}
        cardDescription={excerpt}
      />
      <BlogPostContainer>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        <time
          dateTime={dateTime}
          style={{
            display: 'block',
            textAlign: 'center',
          }}
        >
          {date}
        </time>
        <Img alt="Blog post header image" className="topImg" fluid={sizes} />
        <h1>Table of Contents</h1>
        <article dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        <hr />
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <Flex alignCenter>
          <Icon.Tag size={16} style={{ marginRight: 5 }} />
          <b style={{ marginRight: 10 }}>Tags:</b>
          {tagsHtml}
        </Flex>
        <hr />
        <p style={{ textAlign: 'center' }}>
          Stay tuned to the next issue, next Sunday
        </p>
      </BlogPostContainer>
    </Layout>
  )
}

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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
