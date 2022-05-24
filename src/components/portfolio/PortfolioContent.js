import * as React from "react"
import showdown from "showdown"
import { Link } from "gatsby";

export default function PortfolioContent({ title, client, intro, link, speed, performance, seo, content, image, altTag }) {
    const converter = new showdown.Converter();
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
                        <div>
                            <h1>{title}</h1>
                            <p>Client: {client}</p>
                            <div className="my-10">
                                <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(intro) }} />
                            </div>
                            <Link to={link} className="primary-button" target="_blank" rel="noopener">Visit Website</Link>
                        </div>
                        <div>
                            <img src={image} alt={altTag} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container primary-bg p-20 rounded-lg text-center text-white">
                    <div className="flex justify-center">
                        <div className="lg:w-1/2">
                            <h2 className="h2">Website Metrics</h2>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 mt-10 gap-y-10">
                        <div>
                            <h3 className="heading">{speed}%</h3>
                            <p>Speed</p>
                        </div>
                        <div>
                            <h3 className="heading">{performance}%</h3>
                            <p>Performance</p>
                        </div>
                        <div>
                            <h3 className="heading">{seo}%</h3>
                            <p>Search Engine Optimization</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="markdown-content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}/>
                </div>
            </div>
        </>
    )
}