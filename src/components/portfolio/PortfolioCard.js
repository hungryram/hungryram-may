import { Link } from "gatsby"
import * as React from "react"
import * as Styles from "../../styles/showcase.module.css"


export default function PortfolioCard({ image, title, link }) {
    return (
        <div className={Styles.showcaseCard}>
            <Link to={"/portfolio" + link}>
                <img src={image} alt="" />
                <h3 className="text-center py-10">{title}</h3>
            </Link>
        </div>
    )
}