import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import showdown from "showdown"
import Intro from "../../components/blocks/Intro"
import Seo from "../../components/global/Seo"

export default function Docs({ data }) {
    const frontMatter = data.documentation
    const converter = new showdown.Converter();
    return (
        <Layout>
                  <Seo
        title={frontMatter.frontmatter.search_engine_optimization.title_tag}
        description={frontMatter.frontmatter.search_engine_optimization.meta_description}
      />
            <Intro
                heading={frontMatter.frontmatter.title}
            />
            <div className="section-large">
                <div className="container">
                    <div className="md:flex flex-none">
                        <div className="md:w-2/5">
                            <h3 className="text-2xl">Documentation</h3>
                        </div>
                        <div className="md:w-3/5 markdown-content">
                            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontMatter.rawMarkdownBody) }} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    documentation(id: {eq: $id}) {
      frontmatter {
        title
        search_engine_optimization {
          meta_description
          title_tag
        }
      }
      rawMarkdownBody
    }
  }
`