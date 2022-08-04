import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import Seo from "../../components/global/Seo"
import Intro from "../../components/blocks/Intro"

export default function LegalList({ data }) {
    
    const legals = data.allSanityLegal

    return (
        <Layout>
            <Seo
                title="Legals | Hungry Ram Web Design"
                description="View our website policies"
            />
            <Intro 
                heading="Legal Policies"
                body="View our website policies"
            />
            <div className="section-large">
                <div className="container text-center">
                    <ul>
                    {legals.nodes.map((node) => {
                        return (
                            <li className="text-lg"><Link to={ node.slug.current}>{node.title}</Link></li>
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
    allSanityLegal {
      nodes {
        slug {
          current
        }
        title
      }
    }
  }
  
`