import { Link } from "gatsby"
import * as React from "react"
import Intro from "../components/blocks/Intro"
import Layout from "../components/global/Layout"

export default function Thanks() {
    return (
        <Layout>
            <Intro
                heading="Thank you"
                body="We'll get back to you as soon as possible!"
            />
            <div className="section-large">
                <div className="container text-center">
                    <Link to="/" className="primary-button">Return Home</Link>
                </div>
            </div>
        </Layout>
    )
}