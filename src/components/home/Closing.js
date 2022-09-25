import * as React from "react"
import { Link } from "gatsby"
import { PortableText } from "@portabletext/react"

export default function Closing({ content, features }) {
    return (
        <div className="section">
            <div className="container">
                <div className="lg:w-1/2 content gradient-content">
                    {content &&
                        <PortableText
                            value={content}
                        />
                    }
                    <div className="my-10">
                        <Link to="/contact" className="primary-button">Get Started</Link>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 py-10 gap-10">
                        {features?.map((node) => {
                            return (
                                <div>
                                    <h3 className="text-xl mb-5">{node.heading}</h3>
                                    <p>{node.body}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}