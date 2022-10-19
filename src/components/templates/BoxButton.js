import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function BoxButton({ box }) {
    return (
        <div className="section">
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                    {box?.map((node) => {
                        return (
                            <Link to={node.link}>
                                <div>
                                    <div className="h-60 w-full rounded-md relative accent-gradient text-white">
                                        {node.image.asset.gatsbyImageData &&
                                            <GatsbyImage
                                                image={node.image.asset.gatsbyImageData}
                                                objectFit="cover"
                                                className="absolute w-full h-full object-cover rounded-md"

                                            />
                                        }
                                        <div className="overlay"></div>
                                        <div className="flex items-center justify-center h-full absolute left-0 right-0 z-20">
                                            <h3 className="text-xl">{node.heading}</h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}
