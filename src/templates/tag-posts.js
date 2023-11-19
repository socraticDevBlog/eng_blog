import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `${totalCount} post${
    totalCount > 1 ? "s" : ""
  } about "${tag}" `

  return (
    <Layout pageTitle={pageHeader}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
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
    </Layout>
  )
}

export const tagQuery = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "dddd Do MMMM YYYY")
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

export default tagPosts
