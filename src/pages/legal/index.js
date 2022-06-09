import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import Seo from "../../components/global/Seo"
import Intro from "../../components/blocks/Intro"

export default function LegalList({ data }) {
    
    const frontMatter = data.allLegal

    return (
        <Layout>
            <Seo
                title="Legal"
                description="View our website policies"
            />
            <Intro 
                heading="Legal Policies"
                body="View our website policies"
            />
            <div className="section-large">
                <div className="container text-center">
                    <ul>
                    {frontMatter.nodes.map((node) => {
                        return (
                            <li className="text-lg"><Link to={"/legal" + node.slug}>{node.frontmatter.title}</Link></li>
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
    allLegal {
      nodes {
        frontmatter {
          title
        }
        slug
      }
    }
  }
`