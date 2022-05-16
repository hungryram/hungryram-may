import * as React from "react"
import contact from "../../../data/profile"
import { Link } from "gatsby"
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import social from "../../../data/profile"
import { IconContext } from "@react-icons/all-files"

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: '#15171A'
        }}>
            <div className="section-large">
                <div className="container text-white">
                    <div className="md:flex flex-none">
                        <div className="md:w-1/2 w-full mb-5">
                            <h2 className="h2">Perfect partner for success</h2>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="md:text-right">
                            <a href={social.social_media.facebook} target="_blank" rel="noopener" className="inline-block mx-2">
                                <IconContext.Provider
                                    value={{ size: '30px' }}
                                >
                                <AiFillFacebook />
                                </IconContext.Provider>
                            </a>
                            <a href={social.social_media.instagram} target="_blank" rel="noopener" className="inline-block mx-2">
                                <IconContext.Provider
                                    value={{ size: '30px' }}
                                >
                                <AiFillInstagram />
                                </IconContext.Provider>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
                            <div>
                                <h3 className="font-medium">Contact Information</h3>
                                <ul className="mt-5">
                                    {
                                        contact.contact_information.email &&
                                        <li className="my-2">
                                            <a href={`mailto: ${contact.contact_information.email}`} className="font-light">{contact.contact_information.email}</a>
                                        </li>
                                    }
                                    {
                                        contact.contact_information.office &&
                                        <li className="my-2">
                                            <a href={`tel: ${contact.contact_information.office}`} className="font-light">Office: {contact.contact_information.office}</a>
                                        </li>
                                    }
                                    {
                                        contact.contact_information.cell &&
                                        <li className="my-2">
                                            <a href={`tel: ${contact.contact_information.cell}`} className="font-light">Direct: {contact.contact_information.cell}</a>
                                        </li>
                                    }
                                    {
                                        contact.contact_information.address &&
                                        <li className="my-2">
                                            <a href="#" className="font-light">{contact.contact_information.address}, {contact.contact_information.city}, {contact.contact_information.state} {contact.contact_information.zip_code} </a>
                                        </li>
                                    }
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium">Web Design Services</h3>
                                <ul className="mt-5">
                                    <li className="my-2">
                                        <Link to="/services/small-business-website-design/" className="font-light">Small Business Websites</Link>
                                    </li>
                                    <li className="my-2">
                                        <Link to="/services/agent-idx-websites/" className="font-light">Real Estate IDX Websites</Link>
                                    </li>
                                    <li className="my-2">
                                        <Link to="/services/responsive-web-design/" className="font-light">Responsive Web Design</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium">Support</h3>
                                <ul className="mt-5">
                                    <li className="my-2">
                                        <Link to="/faq/" className="font-light">FAQ</Link>
                                    </li>
                                    <li className="my-2">
                                        <Link to="/documentation/" className="font-light">Documentation</Link>
                                    </li>
                                    <li className="my-2">
                                        <Link to="/contact/" className="font-light">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium">About Hungry Ram</h3>
                                <p className="mt-5" style={{ fontSize: '16px' }}>
                                    Providing the best cutting-edge technology and tools to deliver you high-quality websites. Always aiming to provide the highest level of service. Need help growing your business? Let's connect with a web developer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="md:flex flex-none">
                            <div className="md:w-1/2 w-full">
                                <p className="text-sm">&copy; Copyright {new Date().getFullYear()} &middot; <Link to="https://www.hungryram.com/" className="uk-link-reset">Hungry Ram LLC</Link></p>
                            </div>
                            <div className="md:w-1/2 w-full">
                                <ul className="md:text-right">
                                    <li className="inline-block mx-2 font-light text-sm">
                                        <Link to="/legal/accessibility">Accessibility</Link>
                                    </li>
                                    <li className="inline-block mx-2 font-light text-sm">
                                        <Link to="/legal/privacy-policy/">Privacy Policy</Link>
                                    </li>
                                    <li className="inline-block mx-2 font-light text-sm">
                                        <Link to="/legal/terms-and-conditions/">Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}