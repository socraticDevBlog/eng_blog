import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Card, CardTitle, CardSubtitle, CardBody, Badge } from "reactstrap"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import { slugify } from "../util/util-functions"

const rootUrl = "https://en.socratic.dev"
const rootUrlImg = "https://en.socratic.dev"
const siteTitle = "socraticDev's Blog"

export const Head = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  const socialImg = getImage(post.socialImage.childImageSharp.gatsbyImageData)
  const socialImgSrc = getSrc(socialImg)
  const seoTitle = post.seoTitle || post.title
  const seoDescription = post.seoDescription || data.markdownRemark.excerpt
  const canonicalUrl = `${rootUrl}/${data.markdownRemark.fields.slug}`

  return (
    <>
      <html lang="en" />
      <title>{`${seoTitle} | ${siteTitle}`}</title>
      <meta name="description" content={seoDescription} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:author" content={post.author} />
      <meta property="og:type" content="article" />
      <meta property="article:publisher" content={rootUrl} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={`${rootUrlImg}${socialImgSrc}`} />
      <meta property="article:published_time" content={post.dateISO} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta name="twitter:image" content={`${rootUrlImg}${socialImgSrc}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta property="og:locale" content="en_CA" />
      <link rel="canonical" href={canonicalUrl} />
    </>
  )
}

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout pageTitle={""}>
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
        dateISO: date(formatString: "YYYY-MM-DDTHH:mm:ss[Z]")
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
