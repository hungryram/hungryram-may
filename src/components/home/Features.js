import * as React from "react"

export default function Features({ heading, features }) {
    return (
        <div className="section">
            <div className="container primary-bg md:p-20 py-20 rounded-lg">
                <div className="text-white">
                    {heading &&

                        <div className="flex justify-center">
                            <div className="lg:w-1/2 text-center">
                                <h2 className="h2">{heading}</h2>
                            </div>
                        </div>
                    }

                    <div className="grid lg:grid-cols-3 mt-20 gap-y-20 gap-x-10">
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