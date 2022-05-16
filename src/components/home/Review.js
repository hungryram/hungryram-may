import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import RyanCoyne from "../../images/ryan-coyne-cto-serhant.jpg"

export default function Review() {
    return (
        <div className="section-large">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <div className="lg:w-full">
                            <h2 className="h2">How we help companies like <span className="serhant font-bold">SERHANT.</span></h2>
                            <div className="my-10">
                                <p>We're happy to have Serhant as our partner for web design! Using modern development like Jamstack provides powerful ways to outrank your competitors with incredible user-experience and it's only getting more popular as big companies like Microsoft, Nike, and Shopify join its ranks!</p>
                            </div>
                            <div>
                                <p className="italic text-base">"Hungry Ram is the exceedingly rare combination of value, integrity, adherence to agreed upon timelines, professionalism, and mastery over their craft - all while bringing creativity and a partnership spirit to every interaction and project.</p>
                                <p className="italic text-base mt-5">
                                    With the partnership we have forged together, our business has been able to achieve our web development goals better than ever before which is why I recommend working with Ram and his team wholeheartedly."
                                </p>
                            </div>
                            <div className="my-10">
                                <div className="flex items-center">
                                    <div>
                                        <img src={RyanCoyne} alt="Ryan Coyne CTO of SERHANT." className="rounded-full w-20" />
                                    </div>
                                    <div className="pl-10">
                                        <h3 className="font-bold serhant">Ryan Coyne</h3>
                                        <p>CTO at <a href="https://serhant.com" className="serhant font-bold" target="_blank">SERHANT.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <StaticImage
                            src="https://res.cloudinary.com/hungryram19/image/upload/v1641598013/hungryram/the-westly-serhant_yqk1bm.jpg"
                            alt="The Westly"
                            style={{
                                border: '1px solid #eee'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}