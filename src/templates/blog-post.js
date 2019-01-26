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

  .content {
    .gatsby-highlight,
    img,
    ul,
    p,
    h1 {
      margin-left: auto;
      margin-right: auto;
      max-width: 75rem;
    }

    p,
    li {
      line-height: 1.6;
    }
  }

  .vsmarketplace-block img.logo[src=''] {
    display: none;
  }

  .vsmarketplace-block .reviewSection {
    display: flex;
    align-items: center;
  }

  article {
    img {
      max-width: 100%;
    }

    img[src$='.gif'],
    img[src$='.svg'] {
      display: block;
      margin: 0 auto;
    }
  }

  @media (max-width: 700px) {
    margin: 0 8px;

    font-size: 18px;
  }
`

const BlogPostHeader = styled.header`
  display: flex;

  p {
    line-height: 1.6;
  }

  div {
    flex: 1;
  }

  .topImg {
    flex: 1.3;
  }

  .toc ul {
    padding-left: 0;
  }

  @media (max-width: 700px) {
    display: block;
  }
`

export default function(props) {
  const post = props.data.markdownRemark
  const { excerpt, tableOfContents, html, timeToRead } = post
  const { title, description, date } = post.frontmatter

  const siteTitle = props.data.site.siteMetadata.title
  const sizes = post.frontmatter.image.childImageSharp.fluid
  const dateTime = moment(date, 'MMMM DD, YYYY').format('YYYY-MM-DD')

  let offset = html.indexOf('<!-- end -->') + 12

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
        <BlogPostHeader>
          <Img alt="Blog post header image" className="topImg" fluid={sizes} />
          <div>
            <h1>{title}</h1>
            <time dateTime={dateTime}>{date}</time>
            <span> - {timeToRead} minutes to read</span>
            <p>{excerpt}</p>
            <h1>Table of Contents</h1>
            <article
              className="toc"
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            />
          </div>
        </BlogPostHeader>
        <hr />
        <article
          className="content"
          dangerouslySetInnerHTML={{ __html: html.slice(offset) }}
        />
        <Flex
          alignCenter
          style={{ maxWidth: '75rem', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Icon.Tag size={16} style={{ marginRight: 5 }} />
          <b style={{ marginRight: 10 }}>Tags:</b>
          {tagsHtml}
        </Flex>
        <hr />
        <p style={{ textAlign: 'center' }}>
          Stay tuned to the next issue, next Week
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
      timeToRead
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
