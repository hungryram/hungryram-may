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
            backgroundColor: '#F6F9FC'
        }}>
            <div className="section-large">
                <div className="container text-black">
                    <div className="md:flex flex-none">
                        <div className="md:w-1/2 w-full mb-5 gradient-content content">
                            <h2>Perfect partner for <strong>success</strong></h2>
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
                                            <a href={`mailto: ${contact.contact_information.email}`}>{contact.contact_information.email}</a>
                                        </li>
                                    }
                                    {
                                        contact.contact_information.office &&
                                        <li className="my-2">
                                            <a href={`tel: ${contact.contact_information.office}`}>Office: {contact.contact_information.office}</a>
                                        </li>
                                    }
                                    {
                                        contact.contact_information.cell &&
                                        <li className="my-2">
                                            <a href={`tel: ${contact.contact_information.cell}`}>Direct: {contact.contact_information.cell}</a>
                                        </li>
                                    }
                                    {
                                        contact.contact_information.address &&
                                        <li className="my-2">
                                            <a href="#">{contact.contact_information.address}, {contact.contact_information.city}, {contact.contact_information.state} {contact.contact_information.zip_code} </a>
                                        </li>
                                    }
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium">Web Design Services</h3>
                                <ul className="mt-5">
                                    <li className="my-2">
                                        <Link to="/services/small-business-website-design/">Small Business Websites</Link>
                                    </li>
                                    <li className="my-2">
                                        <Link to="/services/agent-idx-websites/">Real Estate IDX Websites</Link>
                                    </li>
                                    <li className="my-2">
                                        <Link to="/services/responsive-web-design/">Responsive Web Design</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium">Support</h3>
                                <ul className="mt-5">
                                    <li className="my-2">
                                        <Link to="/faq/">FAQ</Link>
                                    </li>
                                    <li className="my-2">
                                        <Link to="/documentation/">Documentation</Link>
                                    </li>
                                    <li className="my-2">
                                        <Link to="/contact/">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium">About Hungry Ram</h3>
                                <p className="mt-5">
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
            <div dangerouslySetInnerHTML={{ __html: `
            <script> (function(){ var s = document.createElement('script'); var h = document.querySelector('head') || document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init({ statementLink : '', footerHtml : '', hideMobile : false, hideTrigger : false, disableBgProcess : false, language : 'en', position : 'left', leadColor : '#146ff8', triggerColor : '#146ff8', triggerRadius : '50%', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerIcon : 'people', triggerSize : 'medium', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'right', triggerPositionY : 'center', triggerOffsetX : 10, triggerOffsetY : 0, triggerRadius : '50%' } }); }; h.appendChild(s); })(); </script>
            ` }} />
        </footer>
    )
}