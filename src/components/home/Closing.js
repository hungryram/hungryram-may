import * as React from "react"
import { Link } from "gatsby"

export default function Closing() {
    return (
        <div className="section">
            <div className="container">
                <div className="lg:w-1/2">
                    <h2 className="h2">Don't be left behind: <span className="gradient-heading">future-proof</span> your website</h2>
                    <div className="my-10">
                    <p>Future proofing your website means making sure it can be used in years to come, not just the next few years. We take care of all the future-facing features on our sites like responsive web design and user-interface updates so that you don't need to worry about them in the future when technology changes.</p>
                    </div>
                    <Link to="/contact" className="primary-button">Get Started</Link>
                </div>
                <div className="mt-10">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 py-10 gap-10">
                        <div>
                            <h3 className="text-xl mb-5">Greater scalability</h3>
                            <p>Leverage the power of a CDN, making your websites run faster and handling large amounts of traffic around the globe.</p>
                        </div>
                        <div>
                            <h3 className="text-xl mb-5">Unbeatable performance</h3>
                            <p>Waiting for pages to load is a thing of the past. Our websites reduce load time and keep customers from leaving your website.</p>
                        </div>
                        <div>
                            <h3 className="text-xl mb-5">Maximum security</h3>
                            <p>We focus on serving static page websites. Meaning no security flaws, hacks, and damages to your website</p>
                        </div>
                        <div>
                            <h3 className="text-xl mb-5">Personal developer</h3>
                            <p>Work with a professional developer that can maintain and improve your website as your business grows.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}