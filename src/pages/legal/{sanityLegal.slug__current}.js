import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import Intro from "../../components/blocks/Intro"
import Seo from "../../components/global/Seo"
import { PortableText } from "@portabletext/react"

export default function Legal({ data }) {
    const frontMatter = data.sanityLegal
    return (
        <Layout>
            <Seo
                title={frontMatter.seo.title_tag}
                description={frontMatter.seo.meta_description}
            />
            <Intro
                heading={frontMatter.title}
            />
            <div className="section">
                <div className="container content">
                    <div>
                        <PortableText
                            value={frontMatter._rawContent}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    sanityLegal(id: {eq: $id}) {
      seo {
        title_tag
        meta_description
      }
      title
      slug {
        current
      }
      _rawContent
    }
  }
  
`