import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import PortfolioContent from "../../components/portfolio/PortfolioContent"
import Seo from "../../components/global/Seo"

export default function Portfolio({ data }) {
    const frontMatter = data.portfolio.frontmatter
    const markdown = data.portfolio
    return (
        <Layout>
                      <Seo
                title={frontMatter.search_engine_optimization.title_tag}
                description={frontMatter.search_engine_optimization.meta_description}
            />
            <PortfolioContent
                title={frontMatter.title}
                client={frontMatter.client_name}
                intro={frontMatter.introduction}
                image={frontMatter.featured_image}
                altTag={frontMatter.image_alt_tag}
                speed={frontMatter.speed}
                seo={frontMatter.seo}
                performance={frontMatter.performance}
                content={markdown.rawMarkdownBody}
                link={frontMatter.website_link}
            />
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    portfolio(id: {eq: $id}) {
      frontmatter {
        search_engine_optimization {
          meta_description
          title_tag
        }
        title
        review
        client_name
        performance
        introduction
        date
        speed
        seo
        website_link
        featured_image
        image_alt_tag
      }
      rawMarkdownBody
    }
  }
  
`