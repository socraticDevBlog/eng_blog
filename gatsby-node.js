const { tagsSorted, slugify } = require(`./src/util/util-functions.js`)
const _ = require("lodash")
const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    createNodeField({
      node,
      name: "slug",
      value: slugify(node.frontmatter.title),
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    singlePost: path.resolve("src/templates/single-post.js"),
    tagsPage: path.resolve("src/templates/tags-page.js"),
    tagPosts: path.resolve("src/templates/tag-posts.js"),
    postsList: path.resolve("src/templates/posts-list.js"),
  }

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { is_archived: { eq: false } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges

    // creating single-post pages
    //
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.singlePost,
        context: {
          slug: node.fields.slug,
        },
      })
    })

    let tags = []
    _.each(posts, (edge) => {
      // si un post n'a pas de tag, alors on ne fait rien
      //
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    let tagPostCounts = {}
    tags.forEach((tag) => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    tags = tagsSorted(tagPostCounts)

    // creating tags page
    //
    createPage({
      path: "/tags",
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    })

    // creating tag posts page
    //
    tags.forEach((tag) => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPosts,
        context: {
          tag,
        },
      })
    })
    const postsPerPage = 12
    const pagesCount = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: pagesCount }).forEach((_, index) => {
      const currentPage = index + 1

      // Do not create the root page here; `src/pages/index.js` provides `/`.
      if (index === 0) return

      createPage({
        path: `/page/${currentPage}`,
        component: templates.postsList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          pagesCount,
        },
      })
    })
  })
}
