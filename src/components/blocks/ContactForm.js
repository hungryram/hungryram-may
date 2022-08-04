import * as React from "react"

export default function ContactForm({ formName }) {
    return (
        <>
            <form name={formName} method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thank-you">
                <input type="hidden" name="form-name" value={formName} />
                <input name="bot-field" type="hidden" />
                <input type="hidden" name="Subject" value={formName} />
                <div>
                    <div className="px-4 py-5 sm:p-6">
                        <div className="">
                            <div className="col-span-6">
                                <input
                                    type="text"
                                    name="full-name"
                                    autoComplete="given-name"
                                    className="mt-5 w-full border-b-black border-b bg-transparent"
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="col-span-6">
                                <input
                                    type="text"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    className="mt-5 w-full border-b-black border-b bg-transparent"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <input
                                    type="text"
                                    name="Phone"
                                    id="phone"
                                    autoComplete="tel"
                                    className="mt-5 w-full border-b-black border-b bg-transparent"
                                    placeholder="Phone"
                                />
                            </div>


                            <div className="mt-1 col-span-6">
                                <textarea
                                    id="about"
                                    name="message"
                                    rows={3}
                                    className="mt-5 w-full border-b-black border-b bg-transparent"
                                    placeholder="Message"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                        <p className="m-1 text-sm text-black">By submitting the form with your information above you are agreeing to our Terms and Conditions and Privacy Policy</p>
                    </div>
                    <div className="px-4 py-2 text-center sm:px-6">
                        <button
                            type="submit"
                            className="primary-button px-20 w-full hover:bg-black hover:text-white transition-all ease-in"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}