/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// Filename for the site's default social preview image (kept as a constant
// so it can be changed in one place). This file should live under
// `src/images/` (we'll look it up via GraphQL `allFile` at build time).
const SOCIAL_IMAGE = "cropped_solid_blue.png"

function SEO({
  description,
  lang,
  meta = [],
  title,
  image,
  canonical,
  locale = "en_CA",
}) {
  const { site, allFile } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          image
          social {
            twitter
            twitterCard
          }
        }
      }
      allFile {
        nodes {
          relativePath
          publicURL
        }
      }
    }
  `)

  // Find the file node that matches the SOCIAL_IMAGE constant (if any).
  const fileNode =
    allFile && allFile.nodes
      ? allFile.nodes.find((n) => n.relativePath === SOCIAL_IMAGE)
      : null

  // Build absolute URLs for images (prefer passed image prop over file lookup over siteMetadata)
  const ensureNoDoubleSlash = (base, path) => {
    if (!base || !path) return undefined
    // Remove trailing slash from base and leading slash from path
    const cleanBase = base.replace(/\/$/, "")
    const cleanPath = path.replace(/^\//, "")
    return `${cleanBase}/${cleanPath}`
  }

  const absoluteImageUrl = image
    ? ensureNoDoubleSlash(site.siteMetadata.siteUrl, image)
    : fileNode && fileNode.publicURL
      ? ensureNoDoubleSlash(site.siteMetadata.siteUrl, fileNode.publicURL)
      : site.siteMetadata.image
        ? ensureNoDoubleSlash(
            site.siteMetadata.siteUrl,
            site.siteMetadata.image
          )
        : undefined

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        // Use the site default social card (prefer large image)
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content:
            site.siteMetadata.social?.twitter || site.siteMetadata.author,
        },
        // Social images (absolute URLs)
        absoluteImageUrl && {
          property: "og:image",
          content: absoluteImageUrl,
        },
        absoluteImageUrl && {
          name: "twitter:image",
          content: absoluteImageUrl,
        },
        {
          property: "og:locale",
          content: locale,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .filter(Boolean)
        .concat(meta || [])}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  locale: "en_CA",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  canonical: PropTypes.string,
  locale: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
