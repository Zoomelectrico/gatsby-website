import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Title = styled.h1`
  text-align: center;
  color: rgb(2, 10, 23);
  font-size: 2rem;
  margin: 0px;
  margin-bottom: 0.75rem;
  padding: 0px;
`

const Date = styled.p`
  display: block;
  text-align: left;
  font-size: 0.85rem;
  color: rgb(2, 10, 23);
`

const Section = styled.section`
  color: #333333;
  margin: 1rem 0px;
  padding: 0.5rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgb(2, 10, 23);
    margin: 1rem 0px;
  }
  p {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: #4481eb;
  }
  hr {
    border-width: 0.5px;
    border-color: rgb(2, 10, 23);
    margin: 1.25rem auto;
    width: 50%;
  }
  ul {
    li {
      p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }
  }
`

const Line = styled.hr`
  border-width: 0.5px;
  border-color: rgb(2, 10, 23);
  margin-bottom: 1rem;
  width: 100%;
`

const Pagination = styled.nav``
const PaginationItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`
const PaginationItem = styled.li`
  a {
    text-decoration: none;
    color: rgb(2, 10, 23);
  }
`
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <Title>{post.frontmatter.title}</Title>
            <Date>{post.frontmatter.date}</Date>
          </header>
          <Section dangerouslySetInnerHTML={{ __html: post.html }} />
          <Line />
        </article>
        <Pagination>
          <PaginationItems>
            <PaginationItem>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </PaginationItem>
            <PaginationItem>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </PaginationItem>
          </PaginationItems>
        </Pagination>
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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
