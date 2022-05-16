import { graphql, StaticQuery, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import * as Styles from "../../styles/services.module.css"

export default function ServicesPage() {
    return (
        <StaticQuery
            query={graphql`
            {
                allService {
                  nodes {
                    frontmatter {
                      title
                      web_design
                      perks
                    }
                    slug
                  }
                }
              }              
            `}
            render={data => {
                return (
                    <>
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

                                            {data.allService.nodes.map((node) => {
                                                return (
                                                    <>
                                                        {node.frontmatter.web_design &&
                                                            <li>
                                                                <Link to={"/services" + node.slug}> {node.frontmatter.title}</Link>
                                                            </li>
                                                        }
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="container">
                                <div className="lg:flex gap-20 flex-none">
                                    <div className="lg:w-2/5 w-full">
                                        <div className="relative">
                                            <StaticImage
                                                src="../../images/website-essentials.jpg"
                                            />
                                            <div className="absolute top-0 p-10">
                                                <h3 className="text-lg font-medium">Website Essentials</h3>
                                                <h2 className="gradient-heading text-3xl font-bold">Reliable services for a successful website</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-3/5 w-full">
                                        <h2 className="h2 my-10">Web Design Services</h2>
                                        <p>We design websites using the latest web development tools and trends with Jamstack - the future of web development</p>
                                        <ul className={`pt-10 ${Styles.serviceList}`}>

                                            {data.allService.nodes.map((node) => {
                                                return (
                                                    <>
                                                        {node.frontmatter.perks &&
                                                            <li>
                                                                <Link to={"/services" + node.slug}> {node.frontmatter.title}</Link>
                                                            </li>
                                                        }
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }}
        />
    )
}