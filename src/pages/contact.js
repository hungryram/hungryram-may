import * as React from "react"
import Layout from "../components/global/Layout"
import Seo from "../components/global/Seo"

export default function Contact() {
    return (
        <Layout>
            <Seo
                title="Contact | Hungry Ram Web Design"
                description="Ready to build your real estate business with modern technology? Let's get in touch!"
            />
            <div className="section-large">
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                        <div>
                            <h1>Contact</h1>
                            <p className="my-5 font-medium">
                                Stop wondering if we're the right team for your website. While most websites are stuck on WordPress, our websites are built to outperform websites like WordPress and Wix.
                            </p>
                            <p>Contact us today to:</p>
                            <ul>
                                <li className="my-5">Get a high-performing website</li>
                                <li className="my-5">Understand how modern web technology can improve your site</li>
                                <li className="my-5">Get consultation for your website project</li>
                            </ul>
                        </div>
                        <div>
                        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thank-you">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="mt-1 border-b-2"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="mt-1 border-b-2"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email-address"
                                                    id="email-address"
                                                    autoComplete="email"
                                                    className="mt-1 border-b-2 w-full"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                    Phone
                                                </label>
                                                <input
                                                    type="text"
                                                    name="Phone"
                                                    id="phone"
                                                    autoComplete="tel"
                                                    className="mt-1 border-b-2 w-full"
                                                />
                                            </div>


                                            <div className="mt-1 col-span-6">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={6}
                                                    className="p-5 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-2 border-gray-300 rounded-md"
                                                    placeholder="Your message"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 sm:col-span-4">
                                        <p className="m-5 text-sm text-black">By submitting the form with your information above you are agreeing to our Terms and Conditions and Privacy Policy</p>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="primary-button px-20"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}