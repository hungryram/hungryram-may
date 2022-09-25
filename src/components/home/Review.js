import { PortableText } from "@portabletext/react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import RyanCoyne from "../../images/ryan-coyne-cto-serhant.jpg"

export default function Review({ avatar, body, heading, name, position, image, altTag }) {
    return (
        <div className="section-large">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <div className="lg:w-full">
                            <h2 className="h2">How we help companies like <span className="serhant font-bold">SERHANT.</span></h2>
                            <div className="my-10 content">
                            {body &&
                            <PortableText
                                value={body}
                            />
                            }
                            </div>
                            <div className="my-10">
                                <div className="flex items-center">
                                    <div>
                                        {avatar &&
                                            <GatsbyImage
                                                image={avatar}
                                                className="rounded-full w-20"
                                                alt="Ryan Coyne CTO of SERHANT."
                                            />
                                        }
                                    </div>
                                    <div className="pl-10">
                                        {name &&
                                        <h3 className="font-bold serhant">{name}</h3>
                                        }
                                        <p>CTO at <a href="https://serhant.com" className="serhant font-bold" target="_blank">SERHANT.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    {image &&
                    <GatsbyImage 
                        image={image}
                        alt={altTag}
                        className="border"
                    />
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}