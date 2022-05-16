import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/global/Layout"
import Intro from "../components/blocks/Intro"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div className="section-large">
        <div className="container">
          <Intro
            heading="Page not found"
            body="Looks like the page you're looking for no longer exists, or has been moved."
            />
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
