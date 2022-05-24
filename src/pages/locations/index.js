import { graphql, Link } from "gatsby"
import * as React from "react"
import Intro from "../../components/blocks/Intro"
import Layout from "../../components/global/Layout"
import LocationList from "../../components/locations/LocationList"

export default function Location({ data }) {
    const frontMatter = data.allLocation
    return (
        <Layout>
            <Intro
                heading="Different locations we've serviced"
                body="Below are primary service areas that are local to Hungry Ram in Orange County. Although this list areas that are local to us, our clients have grown all across the United States. Contact us and find out how your website performance can improve significantly without heavy resources like WordPress."
            />
            <div className="section">
                <div className="container text-center">
                    <ul>
                        {frontMatter.nodes.map((node) => {
                            return (
                                <LocationList
                                    location={node.frontmatter.title}
                                    link={node.slug}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
{
    allLocation {
      nodes {
        frontmatter {
          title
        }
        slug
      }
    }
  }  
`