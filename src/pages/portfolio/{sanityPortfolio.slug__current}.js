import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import Seo from "../../components/global/Seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"

export default function Portfolio({ data }) {
  const portfolio = data.sanityPortfolio
  return (
    <Layout>
      <Seo
        title={portfolio.seo.title_tag}
        description={portfolio.seo.meta_description}
      />
      <div className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
            <div>
              {portfolio.title && <h1>{portfolio.title}</h1>}
              <p>Client: {portfolio.clientName}</p>
              <div className="my-10">
                <p>{portfolio.introduction}</p>
              </div>
              <Link to={portfolio.webLink} className="primary-button" target="_blank" rel="noopener">Visit Website</Link>
            </div>
            <div>
              <GatsbyImage
                image={portfolio.image.asset.gatsbyImageData}
                alt={`${portfolio.title} Web design case study`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container primary-bg p-20 rounded-lg text-center text-white">
          <div className="flex justify-center">
            <div className="lg:w-1/2">
              <h2 className="h2">Website Metrics</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 mt-10 gap-y-10">
            <div>
              <h3 className="heading">{portfolio.speed}%</h3>
              <p>Speed</p>
            </div>
            <div>
              <h3 className="heading">{portfolio.performance}%</h3>
              <p>Performance</p>
            </div>
            <div>
              <h3 className="heading">{portfolio.seoScore}%</h3>
              <p>Search Engine Optimization</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container content">
          <PortableText
            value={portfolio._rawContent}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  sanityPortfolio(id: {eq: $id}) {
    seo {
      title_tag
      meta_description
    }
    seoScore
    title
    webLink
    speed
    review
    performance
    introduction
    clientName
    image {
      asset {
        gatsbyImageData
      }
    }
    _rawContent
  }
}

`