import { graphql } from "gatsby"
import * as React from "react"
import Intro from "../../components/blocks/Intro"
import BlogCard from "../../components/blog/BlogCard"
import Layout from "../../components/global/Layout"
import Seo from "../../components/global/Seo"

export default function BlogList({ data }) {

    const blog = data.allSanityPost

    return (
        <Layout>
            <Seo
                title="The Blog | Hungry Ram Web Design"
                description="Read up on our blog about why we build the best websites"
            />
            <Intro
                heading="Latest News"
                body="View various blog posts about websites and SEO."
            />
            <div className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        {blog.nodes.map((node) => {
                            return (
                                <BlogCard
                                    title={node.title}
                                    image={node.mainImage.asset.gatsbyImageData}
                                    link={node.slug.current}
                                    key={node._id}
                                    altTag={node.alt_tag}
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
  allSanityPost(sort: {fields: publishedAt, order: DESC}) {
    nodes {
      slug {
        current
      }
      title
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      alt_tag
      _id
    }
  }
}

`