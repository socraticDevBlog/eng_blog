import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import { graphql } from "gatsby"
import PageLinks from "../components/page-links"
import SEO from "../components/seo"
const siteTitle = "socraticDev's Blog"
const description = "a blog about technology and philosophy"

const postsList = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, pagesCount } = props.pageContext

  return (
    <Layout pageTitle={currentPage}>
      <SEO title={siteTitle} description={description} />

      {posts.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.gatsbyImageData}
        />
      ))}
      <PageLinks currentPage={currentPage} numberOfPages={pagesCount} />
    </Layout>
  )
}

export const postListQuery = graphql`
  query postsListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { is_archived: { eq: false } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "dddd Do MMMM YYYY", locale: "fr")
            author
            tags
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 1000
                  height: 300
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default postsList
