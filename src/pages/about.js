import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Intro from "../components/blocks/Intro"
import Layout from "../components/global/Layout"
import { Link } from "gatsby"
import Seo from "../components/global/Seo"

export default function About() {
    return (
        <Layout>
            <Seo
                title="About Us - Hungry Ram Web Design"
                description="Located in Orange County, CA. Learn how we provide the most unique websites for businesses across the country."
            />
            <Intro
                heading="About Hungry Ram Web Design"
                body="Hungry Ram Web Design is a small studio founded by Ram Dettmer located in Yorba Linda, CA. We are a team of web designers and graphic designers with a passion for anything tech. There is never a day where we never stop learning and this has helped us stand out from larger agencies."
            />
            <div className="section">
                <div className="container">
                    <div className="flex justify-center">
                        <StaticImage
                            src="../images/team-meeting-web-design.jpg"
                            alt="Team meeting"
                        />
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="md:flex flex-none">
                        <div className="md:w-1/2 w-full">
                            <h2 className="h2 my-10">We provide premium website development for <span className="gradient-heading">fast and reliable websites</span></h2>
                        </div>
                        <div className="md:w-1/2 w-full markdown-content">
                            <p>We have achieved success by moving away from the direction most agencies were going towards - building on WordPress, or any other website builders out there. Website builders allow for easy customization without having to touch code which allows agencies to deliver faster designs.</p>
                            <p>Back in 2018, we learned that there was a new way to build faster and more secure websites that only experienced independent developers had adopted, and that way was using the jamstack architecture. So we decided to utilize this method and give our clients the upper hand. Jamstack sites are essentially hand-coded from scratch without the need for a database, resulting in a much more secure and faster website.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container primary-bg p-20 rounded-lg">
                    <div className="text-white">
                        <div className="flex justify-center">
                            <div className="lg:w-1/2 text-center">
                                <h2 className="h2">Why work with us</h2>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 mt-20 gap-y-20 gap-x-10">
                            <div>
                                <h3 className="text-xl mb-5">Consulting & research</h3>
                                <p>Every website has different needs. We'll find out tools that will benefit your website and streamline processes.</p>
                            </div>
                            <div>
                                <h3 className="text-xl mb-5">Modern technology</h3>
                                <p>We aim to always provide the latest web development technologies for our clients.</p>
                            </div>
                            <div>
                                <h3 className="text-xl mb-5">Our passion</h3>
                                <p>With over a decade of development experience, our websites are built with clean code in mind.</p>
                            </div>
                            <div>
                                <h3 className="text-xl mb-5">The best support</h3>
                                <p>Always get support to your website outside office hours. We go above and beyond to take care of our clients.</p>
                            </div>
                            <div>
                                <h3 className="text-xl mb-5">Built for your audience</h3>
                                <p>Our websites are built with your target audience in mind. So they can easily find what they need.</p>
                            </div>
                            <div>
                                <h3 className="text-xl mb-5">Built with SEO</h3>
                                <p>Not only do we focus on making your site look good, we optimize all web pages with SEO in mind so you can rank higher.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 text-white text-center">
                        <Link to="/contact" className="h2 gradient-heading">Get in touch</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}