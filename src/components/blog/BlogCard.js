import * as React from "react"
import { Link } from "gatsby"

export default function BlogCard({ image, title, excerpt, link }) {
    return (
        <>
            <Link to={"/blog" + link }>
                <div className="flex justify-center m-10">
                    <div>
                        <img className="object-fit h-80 w-full object-cover" src={image} alt="" />
                        <div className="p-6">
                            <h3 className="text-gray-900 text-xl font-medium mb-2">{title}</h3>
                            <p className="text-gray-700 text-base mb-4">
                                {excerpt}
                            </p>
                            <Link to={link} className="text-gray-600 italic">Read more</Link>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}