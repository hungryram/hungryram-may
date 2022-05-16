import { graphql } from "gatsby"
import * as React from "react"
import Intro from "../../components/blocks/Intro"
import Layout from "../../components/global/Layout"
import PortfolioCard from "../../components/portfolio/PortfolioCard"
import Seo from "../../components/global/Seo"

export default function PortfolioList({ data }) {
    const frontMatter = data.allPortfolio
    return (
        <Layout>
            <Seo
                title="Web Design Portfolio | Hungry Ram Web Design"
                description="View our customers who trust us to build their site and establish a long term relationship"
            />
            <Intro
                heading="Web Design Case Studies"
                body="Our clients are receiving the best support for their business and website. We love moving clients away from WordPress and Wix because we improve their site performance significantly. View case studies from companies across a wide spectrum of industries."
            />
            <div className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
                        {frontMatter.nodes.map((node) => {
                            return (
                                <PortfolioCard
                                    image={node.frontmatter.featured_image}
                                    title={node.frontmatter.title}
                                    link={node.slug}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
{
    allPortfolio {
      nodes {
        frontmatter {
          featured_image
          title
        }
        slug
      }
    }
  }
  
`