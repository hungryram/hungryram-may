import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"

export default function LocationDetail({ data }) {
    return (
        <Layout>

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
      }
    }
  }
`