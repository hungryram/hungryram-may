import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import LocationContent from "../../components/locations/LocationContent"
import Seo from "../../components/global/Seo"

export default function LocationDetail({ data }) {
  const frontMatter = data.location.frontmatter
  return (
    <Layout>
      <Seo
        title={frontMatter.search_engine_optimization.title_tag}
        description={frontMatter.search_engine_optimization.meta_description}
      />
      <LocationContent
        firstHeading={frontMatter.first_intro.heading}
        firstBody={frontMatter.first_intro.body}
        secondHeading={frontMatter.second_intro.heading}
        secondBody={frontMatter.second_intro.body}
        thirdHeading={frontMatter.third_intro.heading}
        thirdBody={frontMatter.third_intro.body}
      />
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  location(id: {eq: $id}) {
    frontmatter {
      first_intro {
        body
        heading
      }
      heading
      search_engine_optimization {
        meta_description
        title_tag
      }
      second_intro {
        heading
        body
      }
      third_intro {
        body
        heading
      }
      body
    }
    rawMarkdownBody
  }
}

`