import * as React from "react"
import * as Styles from "../../styles/showcase.module.css"
import { Link } from "gatsby"

// FEATURED IMAGES
import { GatsbyImage } from "gatsby-plugin-image"

export default function Showcase({ showcase }) {
    return (
        <div className="section" style={{
            backgroundColor: '#EDEFF3'
        }}>
            <div className="md:container">
                <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                    {showcase?.map((node, i) => {
                        return (
                            <div className={Styles.showcaseCard} key={i}>
                                <Link to={`${node.link}`}>
                                   <GatsbyImage
                                        image={node.image.asset.gatsbyImageData}
                                        alt="Web design and development portfolio"
                                   />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}