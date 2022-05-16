import * as React from "react"
import Layout from "../../components/global/Layout"
import { graphql, Link } from "gatsby"
import Seo from "../../components/global/Seo"

export default function Documentation({ data }) {
    const frontMatter = data.allDocumentation
    return (
        <Layout>
            <Seo
                title="Documentation | Hungry Ram Web Design"
                description="Get started with learning on how to customize your website."
            />
            <div className="section-large">
                <div className="container">
                    <div className="md:flex flex-none">
                        <div className="md:w-2/5">
                            <h3 className="text-2xl">Documentation</h3>
                        </div>
                        <div className="md:w-3/5">
                            <ul>
                                {frontMatter.nodes.map((node) => {
                                    return (
                                        <li className="border-b py-5">
                                            <Link to={"/documentation" + node.slug}>{node.frontmatter.title}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
{
    allDocumentation {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`