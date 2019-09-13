import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticleCard = styled.article`
  width: 100%;
  padding: 1rem 2rem;
  background: rgb(255, 255, 255);
  border-radius: 0.5rem;
  box-shadow: 0px 0px 1.5rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  h3 {
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
`

const LinkTitle = styled(Link)`
  text-decoration: none;
  color: rgba(2, 10, 23);
`

const Article = ({ node, title }) => (
  <ArticleCard>
    <header>
      <h3 style={{}}>
        <LinkTitle to={node.fields.slug}>{title}</LinkTitle>
      </h3>
      <small>{node.frontmatter.date}</small>
    </header>
    <section>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </section>
  </ArticleCard>
)

const BlogIndex = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
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
              date(formatString: "DD-MMMM-YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Todas la Publicaciones" />
      {posts.map(({ node }) => (
        <Article
          key={node.fields.slug}
          node={node}
          title={node.frontmatter.title || node.fields.slug}
        />
      ))}
    </Layout>
  )
}

export default BlogIndex
