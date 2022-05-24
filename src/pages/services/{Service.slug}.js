import { graphql } from "gatsby"
import * as React from "react"
import Intro from "../../components/blocks/Intro"
import Layout from "../../components/global/Layout"
import ServiceContent from "../../components/services/ServiceContent"
import Seo from "../../components/global/Seo"

export default function Service({ data }) {

  const frontMatter = data.service.frontmatter
  const content = data.service

  return (
    <Layout>
      <Seo
        title={frontMatter.search_engine_optimization.title_tag}
        description={frontMatter.search_engine_optimization.meta_description}
      />
      <Intro
        heading={frontMatter.title}
      />
      <ServiceContent
        title={frontMatter.first_intro.heading}
        intro={frontMatter.first_intro.body}
        featuredImage={frontMatter.image}
        secondTitle={frontMatter.second_intro.heading}
        secondIntro={frontMatter.second_intro.body}
        altTag={frontMatter.image_alt_tag}
        content={content.rawMarkdownBody}
      />
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
    service(id: {eq: $id}) {
      id
      frontmatter {
        title
        image
        image_alt_tag
        search_engine_optimization {
          title_tag
          meta_description
        }
        blocks {
          body
          heading
          svg
        }
        banner {
          body
          heading
        }
        second_intro {
          heading
          body
        }
        first_intro {
          heading
          body
        }
      }
      rawMarkdownBody
    }
  }
  
`