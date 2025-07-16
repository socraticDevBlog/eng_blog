import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Card, CardTitle, CardSubtitle, CardBody, Badge } from "reactstrap"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import { slugify } from "../util/util-functions"

import { Helmet } from "react-helmet"

const rootUrl = "https://en.socratic.dev"
const rootUrlImg = "https://en.socratic.dev"
const siteTitle = "socraticDev's Blog"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  const img = getImage(post.image.childImageSharp.gatsbyImageData)
  const imgSrc = getSrc(img)
  const socialImg = getImage(post.socialImage.childImageSharp.gatsbyImageData)
  const socialImgSrc = getSrc(socialImg)
  return (
    <Layout pageTitle={""}>
      <SEO title={post.title} />

      <Helmet>
        <title>{`${post.title} | ${siteTitle}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={post.title} />
        <meta property="og:author" content={post.author} />
        <meta property="og:type" content="article" />
        <meta property="article:publisher" content="https://en.socratic.dev" />
        <meta property="og:description" content={data.markdownRemark.excerpt} />
        <meta property="og:image" content={`${rootUrlImg}${socialImgSrc}`} />
        <meta property="article:published_time" content={post.date} />
        <meta
          property="og:url"
          content={`${rootUrl}/${data.markdownRemark.fields.slug}`}
        />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="twitter:image" content={`${rootUrlImg}${imgSrc}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content={data.markdownRemark.excerpt}
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_CA" />
        <link
          rel="canonical"
          href={`${rootUrl}/${data.markdownRemark.fields.slug}`}
        />
      </Helmet>

      <Card>
        <GatsbyImage
          className="card-image-top"
          image={post.image.childImageSharp.gatsbyImageData}
        />
        <CardBody>
          <CardTitle>{post.title}</CardTitle>
          <p>
            <span className="text-secondary">{post.date}</span> by{" "}
            <span className="text-secondary">{post.author}</span>
          </p>
          <CardSubtitle>
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <ul className="post-tags">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <Link to={`/tag/${slugify(tag)}`}>
                    <Badge pill color="primary">
                      {tag}
                    </Badge>
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
      excerpt
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
            gatsbyImageData(
              layout: CONSTRAINED
              width: 1000
              height: 300
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP]
            )
          }
        }
        socialImage: image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 1200
              height: 630
              formats: [PNG]
            )
          }
        }
      }
    }
  }
`
export default SinglePost
