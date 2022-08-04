import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import * as Styles from "../../styles/showcase.module.css"


export default function PortfolioCard({ image, title, link, key }) {
    return (
        <div className={Styles.showcaseCard} key={key}>
            <Link to={link}>
                <GatsbyImage
                    image={image}
                    alt={`${title} web design portfolio`}
                />
                <h3 className="text-center py-10">{title}</h3>
            </Link>
        </div>
    )
}