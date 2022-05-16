import { graphql } from "gatsby"
import * as React from "react"
import Intro from "../../components/blocks/Intro"
import BlogCard from "../../components/blog/BlogCard"
import Layout from "../../components/global/Layout"
import Seo from "../../components/global/Seo"

export default function BlogList({ data }) {

    const frontMatter = data.allBlog

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
                        {frontMatter.nodes.map((node) => {
                            return (
                                <BlogCard
                                    title={node.frontmatter.title}
                                    image={node.frontmatter.featured_image}
                                    link={node.slug}
                                    excerpt={node.childMarkdownRemark.excerpt}
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
    allBlog(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          featured_image
          image_alt_tag
        }
        slug
        childMarkdownRemark {
          excerpt(pruneLength: 100)
        }
      }
    }
  }
  
  
  
`