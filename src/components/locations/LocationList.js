import * as React from "react"
import { Link } from "gatsby"

export default function LocationList({ location, link }) {
    return (
        <>
            <li className="mt-5">
                <Link to={"/locations" + link} className="text-lg">{location}</Link>
            </li>
        </>
    )
}