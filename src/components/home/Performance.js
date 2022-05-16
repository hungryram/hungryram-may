import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Performance() {
    return (
        <div className="section primary-bg -mt-20">
            <div className="container text-white">
                <div className="my-20">
                    <div className="grid lg:grid-cols-2 gap-10 sm:grid-cols-1">
                        <div>
                            <h2 className="h2">Building websites with optimal performance and security</h2>
                            <div className="mt-10">
                                <p>We know how important it is to have an online presence, but we also know that Wordpress isn’t always the best solution for your business. We want to show business owners that there are better faster and more secure alternatives to WordPress.</p>
                                <p>Hungry Ram uses modern development architecture designed to make your website faster more secure, and flexible to scale.</p>
                            </div>
                            <div className="mt-10">
                                <Link to="/contact" className="primary-button">Get in touch</Link>
                            </div>
                            <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-20 gap-10">
                                <div>
                                    <h3 className="text-xl">Perfect for SEO</h3>
                                    <p className="mt-5">Our websites are built with high performance for SEO so that way your site gets ranked for search engines.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl">A secure infrastructure</h3>
                                    <p className="mt-5">Your website will serve static files to your visitors. Resulting in increased page speed and reducing potential attacks.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <StaticImage
                                src="../../images/real-estate-web-design.png"
                                alt="real estate web design seo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}