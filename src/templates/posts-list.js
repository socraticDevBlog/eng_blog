import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import { graphql } from "gatsby"
import PageLinks from "../components/page-links"

const postsList = props => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, pagesCount } = props.pageContext

  return (
    <Layout pageTitle={"page " + currentPage}>
      {posts.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
      <PageLinks currentPage={currentPage} numberOfPages={pagesCount}/>
    </Layout>
  )
}

export const postListQuery = graphql`
  query postsListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
                fluid(maxHeight: 200, maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
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
