import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import moment from 'moment'
import * as Icon from 'react-feather'
import Flex from '../components/Flex'

const PostPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 80px;

  h2 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  time {
    display: flex;
    align-items: center;
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

    a:hover {
      color: white;
    }
  }
`

class PostPreview extends React.Component {
  render() {
    const title = get(this.props.post, 'frontmatter.title')

    let dateTime = moment(this.props.post.frontmatter.date).format('YYYY-MM-DD')

    return (
      <article>
        <PostPreviewContainer>
          <Link className="prevImg" to={this.props.post.fields.slug}>
            <Img
              alt={title}
              fluid={this.props.post.frontmatter.image.childImageSharp.fluid}
            />
          </Link>
          <div>
            <Link to={this.props.post.fields.slug}>
              <h2>{title}</h2>
            </Link>
            <time dateTime={dateTime}>
              <Flex alignCenter>
                <Icon.Clock size={16} style={{ marginRight: 10 }} />
                {this.props.post.frontmatter.date}
              </Flex>
            </time>
            <p dangerouslySetInnerHTML={{ __html: this.props.post.excerpt }} />
            <Link to={this.props.post.fields.slug}>
              <Flex alignCenter>
                View More
                <Icon.ArrowRight style={{ marginLeft: 10 }} />
              </Flex>
            </Link>
          </div>
        </PostPreviewContainer>
        <hr style={{ color: '#777', margin: '32px auto', width: '80%' }} />
      </article>
    )
  }
}

export default PostPreview
