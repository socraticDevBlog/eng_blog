import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const IndexPage = () => (
  <Layout pageTitle= "Main()">
    <SEO title="Main" keywords={["tech blog", "Maxime Bonin", "dev", "developer", "programming", "technology","software engineering"]} />
    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
              />
            ))}
          </div>
        )
      }}
    />
  </Layout>
)

const indexQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            author
            date(formatString: "dddd MMMM Do YYYY", locale: "en")
            title
            tags
            image {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          fields {
            slug
          }
          id
          excerpt
        }
      }
    }
  }
`
export default IndexPage
