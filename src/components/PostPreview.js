import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const PostPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 80px;

  h2 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  time {
    display: block;
    margin-bottom: 30px;
  }

  div,
  a.prevImg {
    flex: 1;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 300ms ease-in-out;

    &:hover {
      color: #007acc;
    }
  }

  @media (max-width: 700px) {
    margin: 0 20px;
    flex-direction: column;
  }
`

class PostPreview extends React.Component {
  render() {
    const title = get(this.props.post, 'frontmatter.title')

    return (
      <PostPreviewContainer>
        <Link className="prevImg" to={this.props.post.fields.slug}>
          <Img
            alt={title}
            sizes={this.props.post.frontmatter.image.childImageSharp.sizes}
          />
        </Link>
        <div>
          <Link to={this.props.post.fields.slug}>
            <h2>{title}</h2>
          </Link>
          <time>{this.props.post.frontmatter.date}</time>
          <p dangerouslySetInnerHTML={{ __html: this.props.post.excerpt }} />
          <Link to={this.props.post.fields.slug}>View More</Link>
        </div>
      </PostPreviewContainer>
    )
  }
}

export default PostPreview
