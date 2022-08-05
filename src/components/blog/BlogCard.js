import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function BlogCard({ image, title, altTag, link }) {
    return (
        <>
            <Link to={link}>
                <div className="flex justify-center m-10">
                    <div>
                        <GatsbyImage
                            image={image}
                            alt={altTag}
                            className="object-fit h-80 w-full object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-gray-900 text-xl font-medium mb-2">{title}</h3>
                            <Link to={link} className="text-gray-600 italic">Read more</Link>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}