import { PortableText } from '@portabletext/react'
import { Link } from 'gatsby'
import React from 'react'

export default function Hero({ heading, body, title, subtitle, primaryCta, secondaryCta }) {
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
                        <div className="mt-10 space-y-2">
                        <Link to="/contact" className="primary-button mx-2 md:inline block">{primaryCta ? primaryCta : 'Get a Quote'}</Link>
                        <a href="https://calendly.com/hungry-ram" className="secondary-button mx-2 md:inline block">{secondaryCta ? secondaryCta : 'Talk to an Expert'}</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
