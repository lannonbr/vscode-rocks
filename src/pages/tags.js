import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import SEOHelmet from '../components/SEOHelmet'
import Container from '../components/Container'

const TagContainer = styled(Container)`
  li {
    margin-bottom: 10px;
  }
`

export default function TagsPage({ data }) {
  const tags = data.allMarkdownRemark.group
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <SEOHelmet
        title={`All Tags | ${siteTitle}`}
        description={'Tags Listing'}
        cardDescription={'VS Code Rocks Tags Listing'}
      />
      <TagContainer>
        <h1>All Tags</h1>
        <ul>
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </TagContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
