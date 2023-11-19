import React from "react"
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "../util/util-functions"

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <Card>
      <Link to={`/${slug}`}>
        <GatsbyImage className="card-image-top" image={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={`/${slug}`}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-secondary">{date}</span> by{" "}
          <span className="text-secondary">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map((tag) => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge pill color="primary">
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={`/${slug}`} className="btn btn-outline-primary float-end">
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
