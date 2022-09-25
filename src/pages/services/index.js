import * as React from "react"
import Intro from "../../components/blocks/Intro"
import Layout from "../../components/global/Layout"
import ServicesPage from "../../components/services/ServicesPage"
import Seo from "../../components/global/Seo"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as Styles from "../../styles/services.module.css"

export default function ServiceList({ data }) {

    const allSanity = data.allSanityServices.nodes

    return (
        <Layout>
            <Seo
                title="Services | Hungry Ram Web Design"
                description="Full service web design and development for real estate and small businesses. We help establish an online presence using only modern tools."
            />
            <Intro
                heading="Services"
            />

            <div className="section">
                <div className="container">
                    <div className="lg:flex gap-20 flex-none">
                        <div className="lg:w-2/5 w-full">
                            <div className="relative">
                                <StaticImage
                                    src="../../images/web-design-services.jpg"
                                />
                                <div className="absolute top-0 p-10">
                                    <h3 className="text-lg font-medium">Custom Built Websites</h3>
                                    <h2 className="gradient-heading text-3xl font-bold">Traditional websites can't compete</h2>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-3/5 w-full">
                            <h2 className="h2 my-10">Web Design Services</h2>
                            <p>We design websites using the latest web development tools and trends with Jamstack - the future of web development</p>
                            <ul className={`pt-10 ${Styles.serviceList}`}>

                                {allSanity.map((node) => {
                                    return (
                                        <>
                                            <li>
                                                <Link to={node.slug.current}> {node.title}</Link>
                                            </li>
                                        </>
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
    allSanityServices {
      nodes {
        _key
        slug {
          current
        }
        title
      }
    }
  }
  
`