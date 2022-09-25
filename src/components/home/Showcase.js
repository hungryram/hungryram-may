import * as React from "react"
import * as Styles from "../../styles/showcase.module.css"
import { Link } from "gatsby"

// FEATURED IMAGES
import Pho from "../../images/pho-ha-plus-diamondbar.jpg"
import Krave from "../../images/kraveanaheim_igowwj.jpg"
import RN from "../../images/RN-insurance_cyylok.jpg"
import Westly from "../../images/the-westly-serhant_yqk1bm.jpg"
import Univers from "../../images/univers-serhant-landing.jpg"
import Wingferno from "../../images/wingferno.jpg"
import showcase from "../../../hungryram/schemas/home/showcase"
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