import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import { graphql } from "gatsby"
import PageLinks from "../components/page-links"
import bannerImage from "../images/_banner.svg"

import { Helmet } from "react-helmet"
const rootUrl = "https://en.socratic.dev"
const rootUrlImg = "https://en.socratic.dev"
const siteTitle = "socraticDev's Blog"
const author = "socraticDev"
const description = "a blog about technology and philosophy"
const bannerImageUrl = `${rootUrlImg}${bannerImage}`

const postsList = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, pagesCount } = props.pageContext

  return (
    <Layout pageTitle={currentPage}>
      <Helmet>
        <title>{`${siteTitle}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:author" content={author} />
        <meta property="og:type" content="article" />
        <meta property="article:publisher" content={rootUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={bannerImageUrl} />
        <meta property="og:url" content={`${rootUrl}`} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="twitter:image" content={bannerImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_CA" />
        <link rel="canonical" href={`${rootUrl}`} />
      </Helmet>

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
