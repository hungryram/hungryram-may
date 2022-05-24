import * as React from "react"
import showdown from "showdown"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function LocationContent({ firstHeading, firstBody, secondHeading, secondBody, thirdHeading, thirdBody }) {
    const converter = new showdown.Converter();
    return (
        <div className="markdown-content">
            <div className="section">
                <div className="container">
                    <h1>{firstHeading}</h1>
                    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(firstBody) }} />
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                        <div>
                            <StaticImage
                                src="https://res.cloudinary.com/hungryram19/image/upload/v1628214718/hungryram/contact-hungry-ram_antytx.jpg"
                            />
                        </div>
                        <div>
                            <h1 className="mt-0">{secondHeading}</h1>
                            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(secondBody) }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section pt-0">
                <div className="container">
                    <h1>{thirdHeading}</h1>
                    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(thirdBody) }} />
                    <div className="mt-10">
                    <Link to="/contact/" className="primary-button">Get in touch</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}