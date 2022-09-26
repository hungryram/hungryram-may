import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import PortfolioCard from "../../components/portfolio/PortfolioCard"
import Seo from "../../components/global/Seo"
import Hero from "../../components/templates/hero"

export default function PortfolioList({ data }) {
    const frontMatter = data.allSanityPortfolio
    return (
        <Layout>
            <Seo
                title="Web Design Portfolio | Hungry Ram Web Design"
                description="View our customers who trust us to build their site and establish a long term relationship"
            />
            <Hero
              title="Web Design & Development Portfolio"
              subtitle="View various websites we've built for our clients. Want to learn how we can help with your website? Let's get in touch"
            />
            <div className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
                        {frontMatter.nodes.map((node) => {
                            return (
                                <PortfolioCard
                                    image={node.image.asset.gatsbyImageData}
                                    title={node.title}
                                    link={node.slug.current}
                                    key={node._id}
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
    allSanityPortfolio {
      nodes {
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        _id
        title
      }
    }
  }
  
`