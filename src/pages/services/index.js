import * as React from "react"
import Intro from "../../components/blocks/Intro"
import Layout from "../../components/global/Layout"
import ServicesPage from "../../components/services/ServicesPage"
import Seo from "../../components/global/Seo"

export default function ServiceList() {
    return (
        <Layout>
            <Seo
                title="Services | Hungry Ram Web Design"
                description="Full service web design and development for real estate and small businesses. We help establish an online presence using only modern tools."
            />
            <Intro
                heading="Services"
            />

            <ServicesPage />
        </Layout>
    )
}