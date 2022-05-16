import * as React from "react"
import Navbar from "../global/Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
    return (
        <>
        <Navbar />
            <main>
                {children}
            </main>
        <Footer />
        </>
    )
}