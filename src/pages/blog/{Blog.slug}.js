import { graphql } from "gatsby"
import * as React from "react"
import Intro from "../../components/blocks/Intro"
import Layout from "../../components/global/Layout"
import BlogContent from "../../components/blog/BlogContent"
import Seo from "../../components/global/Seo"

export default function BlogList({ data }) {
  const frontMatter = data.blog.frontmatter
  return (
    <Layout>
      <Seo
        title={frontMatter.title_tag}
        description={frontMatter.meta_description}
      />
      <Intro
        heading={frontMatter.title}
      />
      <BlogContent
        image={frontMatter.featured_image}
        altTag={frontMatter.image_alt_tag}
        content={data.blog.rawMarkdownBody}
      />
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
    blog(id: {eq: $id}) {
      frontmatter {
        title
        featured_image
        image_alt_tag
        title_tag
        meta_description
      }
      rawMarkdownBody
    }
  }
  
`