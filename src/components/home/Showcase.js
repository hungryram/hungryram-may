import * as React from "react"
import * as Styles from "../../styles/showcase.module.css"
import { Link } from "gatsby"

// FEATURED IMAGES
import Pho from "../../images/pho-ha-plus-diamondbar.jpg"
import Karina from "../../images/karina-crisp_xlhli4.jpg"
import Krave from "../../images/kraveanaheim_igowwj.jpg"
import RN from "../../images/RN-insurance_cyylok.jpg"
import Westly from "../../images/the-westly-serhant_yqk1bm.jpg"
import Univers from "../../images/univers-serhant-landing.jpg"

export default function Showcase() {
    return (
        <div className="section" style={{
            backgroundColor: '#EDEFF3'
        }}>
            <div className="md:container">
                <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                    <div className={Styles.showcaseCard}>
                        <Link to="/portfolio/krave-nutrition-anaheim/">
                            <img src={Krave} alt="Pho Ha Plus" />
                        </Link>
                    </div>
                    <div className={Styles.showcaseCard}>
                        <Link to="/portfolio/univers/">
                            <img src={Univers} alt="Univers landing page design" />
                        </Link>
                    </div>
                    <div className={Styles.showcaseCard}>
                        <Link to="/portfolio/the-westly/">
                            <img src={Westly} alt="The Westly web design" />
                        </Link>
                    </div>
                    <div className={Styles.showcaseCard}>
                        <Link to="/portfolio/rn-insurance/">
                            <img src={RN} alt="Rn Insurance web design" />
                        </Link>
                    </div>
                    <div className={Styles.showcaseCard}>
                        <Link to="/portfolio/karina-crisp-summit-realty/">
                            <img src={Karina} alt="Karina Crisp web design" />
                        </Link>
                    </div>
                    <div className={Styles.showcaseCard}>
                        <Link to="/portfolio/pho-ha-plus/">
                            <img src={Pho} alt="Pho Ha Plus" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}