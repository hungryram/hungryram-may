import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Logos() {
    return (
        <div className="container text-center py-10">
            <h2 className="third-heading">Trusted by established names</h2>
            <div className="my-10 md:flex items-center justify-center flex-none">
                <StaticImage
                    src="../images/serhant.png"
                    width={150}
                    alt="SERHANT."
                    class="m-5"
                />
                <StaticImage
                    src="../images/realtyone-logo-new.png"
                    width={150}
                    alt="RealtyONEgroup"
                    class="m-5"
                />
                <StaticImage
                    src="../images/c21garlandlogo2.png"
                    width={150}
                    alt="Century21."
                    class="m-5"
                />
                <StaticImage
                    src="../images/pho-ha-plus.png"
                    width={150}
                    alt="Pho Ha Plus"
                    class="mx-5"
                />
                <StaticImage
                    src="../images/exp-brokered-by.png"
                    width={150}
                    alt="EXP Realty"
                    class="m-5"
                />
            </div>
        </div>
    )
}
