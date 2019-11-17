import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Card, CardSubtitle, CardBody, Badge } from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/util-functions"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout pageTitle={post.title}>
      <SEO title={post.title} />
      <Card>
        <Img
          className="card-image-top"
          fluid={post.image.childImageSharp.fluid}
        />
        <CardBody>
          <p>
            <span className="text-info">{post.date}</span> by {' '}
            <span className="text-info">{post.author}</span>
          </p>
          <CardSubtitle>
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <ul className="post-tags">
              {post.tags.map(tag => (
                <li key={tag}>
                  <Link to={`/tag/${slugify(tag)}`}>
                    <Badge color="primary">{tag}</Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </CardSubtitle>
        </CardBody>
      </Card>
    </Layout>
  )
}

export const postQuery = graphql`
  query bloPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "dddd MMMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxHeight: 200, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default SinglePost
