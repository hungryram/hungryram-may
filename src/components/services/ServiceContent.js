import { graphql, Link, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react"
import showdown from "showdown"
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

export default function ServiceContent({ title, intro, featuredImage, altTag, content, secondTitle, secondIntro }) {
    const converter = new showdown.Converter();
    return (
        <StaticQuery
            query={graphql`
            query ($id: String) {
                service(id: {eq: $id}) {
                  id
                  frontmatter {
                    title
                    image
                    image_alt_tag
                    search_engine_optimization {
                      title_tag
                      meta_description
                    }
                    blocks {
                      body
                      heading
                      svg
                    }
                    banner {
                      body
                      heading
                    }
                    second_intro {
                      heading
                      body
                    }
                    first_intro {
                      heading
                      body
                    }
                  }
                  rawMarkdownBody
                }
              }
              
            `}
            render={data => {
                return (
                    <>
                        <div className="section">
                            <div className="container">
                                <div className="lg:flex flex-none gap-20">
                                    <div className="lg:w-1/2 w-full markdown-content mb-10">
                                        <h2 className="h2">{title}</h2>
                                        <div className="my-10" dangerouslySetInnerHTML={{ __html: converter.makeHtml(intro) }} />
                                        <Link to="/contact" className="primary-button">Get started</Link>
                                    </div>
                                    <div className="lg:w-1/2 w-full">
                                        <img src={featuredImage} alt={altTag} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-large">
                            <div className="container">
                                <div className="lg:flex flex-none gap-10">
                                    <div className="lg:w-1/2 w-full markdown-content">
                                        <h2 className="h2">{secondTitle}</h2>
                                        <div className="my-10" dangerouslySetInnerHTML={{ __html: converter.makeHtml(secondIntro) }} />
                                    </div>
                                    <div className="lg:w-1/2 w-full markdown-content">
                                        <ul>
                                            <li className="my-5"><Link to="/services/websites-with-ssl-certificates/" className="text-xl">Fully installed SSL certificate</Link></li>
                                            <li className="my-5"><Link to="/services/websites-with-ssl-certificates/" className="text-xl">Responsive web design for all devices</Link></li>
                                            <li className="my-5"><Link to="/services/websites-with-ssl-certificates/" className="text-xl"> Blazing-fast hosting</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {data.service.frontmatter.blocks &&
                            <div className="section my-10" style={{
                                backgroundColor: '#111111'
                            }}>
                                <div className="container">
                                    <div className="grid grid-cols-1 md:grid-cols-3 text-white">
                                        {data.service.frontmatter.blocks.map((node) => {
                                            return (
                                                <>
                                                    <div className="p-10">
                                                        <div className="w-20 mb-10" dangerouslySetInnerHTML={{ __html: converter.makeHtml(node.svg) }} />
                                                        <h3 className="text-xl">{node.heading}</h3>
                                                        <p className="my-5">{node.body}</p>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="section-large">
                            <div className="container markdown-content">
                                <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
                            </div>
                        </div>
                    </>
                )
            }}
        />
    )
}