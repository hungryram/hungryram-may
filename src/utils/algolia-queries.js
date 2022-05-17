const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content/documentation`
const indexName = `Documentation`

const pageQuery = `
{
  allDocumentation {
    nodes {
      slug
      id
      frontmatter {
        title
      }
      childMarkdownRemark {
        excerpt(pruneLength: 200, truncate: true)
      }
    }
  }
}

`

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:10`] },
  },
]

module.exports = queries