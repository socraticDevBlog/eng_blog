import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import PageLinks from "../components/page-links"

const IndexPage = () => {
  const postsPerPage = 12
  let numberOfPages
  return (
    <Layout pageTitle="">
      <SEO
        title="Home"
        keywords={[
          "Maxime Bonin",
          "developer",
          "fullstack",
          "software engineering",
          "blogue techno",
          "socraticdev",
          "dailyprog",
        ]}
      />
      <StaticQuery
        query={indexQuery}
        render={(data) => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postsPerPage
          )
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
                  fluid={node.frontmatter.image.childImageSharp.gatsbyImageData}
                  tags={node.frontmatter.tags}
                />
              ))}
              <PageLinks currentPage={1} numberOfPages={numberOfPages} />
            </div>
          )
        }}
      />
    </Layout>
  )
}

const indexQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 5) {
      totalCount
      edges {
        node {
          frontmatter {
            author
            date(formatString: "dddd MMMM Do YYYY", locale: "en")
            title
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
          id
          excerpt
        }
      }
    }
  }
`
export default IndexPage
