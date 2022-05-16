import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import showdown from "showdown"
import Intro from "../../components/blocks/Intro"
import Seo from "../../components/global/Seo"

export default function Legal({ data }) {
    const frontMatter = data.legal
    const converter = new showdown.Converter();
    return (
        <Layout>
            <Seo
                title={frontMatter.title_tag}
                description={frontMatter.meta_description}
            />
            <Intro
                heading={frontMatter.frontmatter.title}
            />
            <div className="section">
                <div className="container markdown-content">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontMatter.rawMarkdownBody) }} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    legal(id: {eq: $id}) {
      frontmatter {
        title
        title_tag
        meta_description
      }
      rawMarkdownBody
    }
  }
`