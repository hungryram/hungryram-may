import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'

export default function Column({ image, altTag, link, service, heading }) {
    return (
        <div className="section">
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                    {service.map((node) => {
                        return (
                            <div>
                                <Link to={link}>
                                    {image &&
                                        <GatsbyImage
                                            image={image}
                                            alt={altTag}
                                        />
                                    }
                                    <div className="absolute">
                                        <h2>{heading}</h2>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
