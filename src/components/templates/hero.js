import { PortableText } from '@portabletext/react'
import { Link } from 'gatsby'
import React from 'react'

export default function Hero({ heading, body, title, subtitle }) {
    return (
        <div className="section">
            <div className="container">
                <div className="text-center justify-center flex hero gradient-content">
                    <div className="md:w-2/3">
                        {heading &&
                            <PortableText
                                value={heading}
                            />
                        }
                        {title &&
                            <h1>{title}</h1>
                        }
                        {subtitle &&
                            <p>{subtitle}</p>
                        }
                        {body &&
                            <PortableText
                                value={body}
                            />
                        }
                        <div className="mt-10">
                            <Link to="/contact" className="primary-button mx-2">Contact</Link>
                            <a href="https://calendly.com/hungry-ram" className="secondary-button mx-2">Book a call</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
