import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Button, Badge } from "reactstrap"
import { slugify } from "../util/util-functions"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="Topics discussed in posts">
      <SEO title="Topics" keywords={["themes", "tags", "topics"]} />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge bg="dark">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage
