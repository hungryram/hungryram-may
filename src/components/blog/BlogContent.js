import * as React from "react"
import showdown from "showdown"

export default function BlogList({ image, content, altTag }) {
    const converter = new showdown.Converter();
    return (
        <>
            <div className="section">
                <div className="container flex justify-center">
                    <img src={image} alt={altTag} className="w-1/2"/>
                </div>
            </div>
            <div className="section">
                <div className="container markdown-content">
                    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}  />
                </div>
            </div>
        </>
    )
}