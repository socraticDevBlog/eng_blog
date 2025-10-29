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

function SEO({ description, lang, meta, title }) {
  const { site, file } = useStaticQuery(graphql`
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
      file(relativePath: { eq: "devops-knows.png" }) {
        publicURL
      }
    }
  `)

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
            if (file && file.publicURL && site.siteMetadata.siteUrl) {
              return `${site.siteMetadata.siteUrl}${file.publicURL}`
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
            if (file && file.publicURL && site.siteMetadata.siteUrl) {
              return `${site.siteMetadata.siteUrl}${file.publicURL}`
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
