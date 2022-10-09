import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { PortableText } from "@portabletext/react"

export default function Performance({ heading, body, featureOne, featureTwo, image, altTag }) {
    return (
        <div className="section primary-bg -mt-20">
            <div className="container text-white">
                <div className="my-20">
                    <div className="grid lg:grid-cols-2 gap-10 sm:grid-cols-1 content gradient-content">
                        <div>
                            {heading &&
                                <PortableText
                                    value={heading}
                                />
                            }
                            <div className="mt-10">
                                {body &&
                                    <PortableText
                                        value={body}
                                    />
                                }
                            </div>
                            <div className="mt-10">
                                <Link to="/contact" className="primary-button">Get a free consultation</Link>
                            </div>
                            {/* <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-20 gap-10 text-sm">
                                <div>
                                    {featureOne &&
                                        <PortableText
                                            value={featureOne}
                                        />
                                    }
                                </div>
                                <div>
                                    {featureTwo &&
                                        <PortableText
                                            value={featureTwo}
                                        />
                                    }
                                </div>
                            </div> */}
                        </div>
                        <div>
                            {image &&
                                <GatsbyImage
                                    image={image}
                                    alt={altTag}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}