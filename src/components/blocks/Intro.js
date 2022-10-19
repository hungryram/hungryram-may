import { PortableText } from "@portabletext/react"
import * as React from "react"

export default function Intro({ heading, body }) {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="lg:w-2/3 text-center">
                            {heading &&
                                <PortableText 
                                    value={heading}
                                />
                            }
                            {body &&
                                <PortableText 
                                    value={body}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}