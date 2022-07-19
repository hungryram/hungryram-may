import * as React from "react"
import Layout from "../components/global/Layout"
import Intro from "../components/blocks/Intro"
import Seo from "../components/global/Seo"
import ContactForm from "../components/blocks/ContactForm"

export default function() {
    return (
        <>
            <Layout>
                <Seo 
                    title="ADA Compliant | Hungry Ram Web Design"
                    description="Hungry Ram is a partner for Accessibe, a tool providing ADA Compliant softwares to ensure WCAG compliant"
                />
                <div className="section">
                    <div className="container text-center">
                        <h1>ADA Compliant</h1>
                        <p>Have any questions about ADA compliance? Fill out the form below and let's get in touch! If you'd like to take a look at a software that can help with ADA compliance, please <a href="https://accessibe.com/a/awbmo59" target="_blank" className="font-bold"> click here for Accessibe, the automated solution for ADA and WCAG compliance</a></p>
                    </div>
                </div>
                <div className="section">
                    <div className="container lg:px-64">
                        <ContactForm 
                            formName="ADA Compliant Form"
                        />
                    </div>
                </div>
            </Layout>
        </>
    )
}