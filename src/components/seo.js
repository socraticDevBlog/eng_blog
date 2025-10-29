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
const SOCIAL_IMAGE = "_banner.svg"

function SEO({ description, lang, meta, title }) {
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
          content:
            site.siteMetadata.social && site.siteMetadata.social.twitterCard
              ? site.siteMetadata.social.twitterCard
              : `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content:
            site.siteMetadata.social && site.siteMetadata.social.twitter
              ? site.siteMetadata.social.twitter
              : site.siteMetadata.author,
        },
        // Social images (absolute URLs)
        {
          property: `og:image`,
          content: (function () {
            if (fileNode && fileNode.publicURL && site.siteMetadata.siteUrl) {
              return `${site.siteMetadata.siteUrl}${fileNode.publicURL}`
            }
            if (site.siteMetadata.siteUrl && site.siteMetadata.image) {
              return `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`
            }
            return undefined
          })(),
        },
        {
          name: `twitter:image`,
          content: (function () {
            if (fileNode && fileNode.publicURL && site.siteMetadata.siteUrl) {
              return `${site.siteMetadata.siteUrl}${fileNode.publicURL}`
            }
            if (site.siteMetadata.siteUrl && site.siteMetadata.image) {
              return `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`
            }
            return undefined
          })(),
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
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
