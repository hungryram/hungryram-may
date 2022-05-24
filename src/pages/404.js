import * as React from "react"
import Layout from "../components/global/Layout"
import Intro from "../components/blocks/Intro"

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
