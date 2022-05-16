import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/global/Layout"
import UpCity from "../images/best-web-developer-upcity.png"
import Showcase from "../components/home/showcase"
import Performance from "../components/home/Performance"
import Review from "../components/home/Review"
import Features from "../components/home/Features"
import Closing from "../components/home/Closing"
import Seo from "../components/global/Seo"


export default function Home() {

  const schemaMarkup =
  {
    "@context": "http://schema.org",
    "@type": "ProfessionalService",
    "image": "https://res.cloudinary.com/hungryram19/image/upload/v1606809089/hungryram/favicon_wbz1ng.jpg",
    "priceRange": null,
    "telephone": "657-549-5082",
    "name": "Hungry Ram",
    "logo": "https://res.cloudinary.com/hungryram19/image/upload/v1606809089/hungryram/favicon_wbz1ng.jpg",
    "description": "Orange County web design for real estate professionals and small businesses.",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.87521697227549,
      "longitude": -117.74577287142314
    },
    "url": "https://www.hungryram.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "657-549-5082",
      "contactType": "customer service",
      "email": "ram@hunryram.com",
      "contactOption": "",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 33.87521697227549,
          "longitude": -117.74577287142314
        },
        "geoRadius": 1000
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United States",
      "addressLocality": "Yorba Linda",
      "addressRegion": "CA",
      "postalCode": "92887",
      "streetAddress": "5511 Mirage Street #1007"
    }
  }


  return (
    <Layout>
      <Seo
        schemaMarkup={schemaMarkup}
        title="Orange County Web Design - Hungry Ram Web Design"
        description="We deliver the highest-performing SEO website designs for real estate and small businesses to help stand out from local competitors. Find out how our sites are different."
      />
      <div className="py-16 text-center justify-center flex">
        <div className="lg:w-1/2">
          <h1 className="heading">We build <span className="gradient-heading">high-performance websites</span> that convert</h1>
          <p>Hungry Ram is an award-winning web design and development studio. Work with the best web design team to deliver effective websites that convert.</p>
          <div className="mt-10">
            <Link to="/contact" className="primary-button mx-2">Contact</Link>
            <a href="https://calendly.com/hungry-ram" className="secondary-button mx-2">Book a call</a>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="container flex justify-center">
          <StaticImage
            src="../images/hero-image.png"
            alt="Real Estate Web Design"
          />
        </div>
      </div>

      <div className="container text-center py-10">
        <h2 className="third-heading">Trusted by established names</h2>
        <div className="my-10 flex items-center justify-center">
          <StaticImage
            src="../images/serhant.png"
            width={150}
            alt="SERHANT."
            class="mx-5"
          />
          <StaticImage
            src="../images/realtyone-logo-new.png"
            width={150}
            alt="SERHANT."
            class="mx-5"
          />
          <StaticImage
            src="../images/c21garlandlogo2.png"
            width={150}
            alt="SERHANT."
            class="mx-5"
          />
          <StaticImage
            src="../images/pho-ha-plus.png"
            width={150}
            alt="SERHANT."
            class="mx-5"
          />
          <StaticImage
            src="../images/exp-brokered-by.png"
            width={150}
            alt="SERHANT."
            class="mx-5"
          />
        </div>
      </div>

      <div className="py-10 z-10 relative">
        <div className="container primary-bg flex justify-center text-center rounded-xl">
          <div className="w-5/6 text-white py-10">
            <h2 className="third-heading">Award winning web designs</h2>
            <div className="py-10 flex justify-center">
              <div className="mx-5">
                <a href="https://www.expertise.com/ca/anaheim/web-developers" /> <img width="190" height="160" src="https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_auto/remote_media/awards/ca_anaheim_web-developers_2022_inverse.svg" alt="Top Web Developer in Anaheim" />
              </div>
              <div className="mx-5">
                <img src="https://res.cloudinary.com/hungryram19/image/upload/v1647290400/hungryram/most-reviewed-agency.png" width="120" alt="" />
              </div>
              <div className="mx-5">
                <img src={UpCity} width="150" alt="TOP WEBSITE DEVELOPER" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{
        backgroundColor: '#EDEFF3',
        marginTop: '-100px'
      }}>
        <div className="container">
          <div className="section">
            <div className="md:w-1/2 w-full mt-10">
              <h2 className="h2">We specialize in <span className="gradient-heading">real estate</span> and <span className="gradient-heading">small business</span> web design</h2>
            </div>
            <div className="md:columns-2 mt-10">
              <p className="mb-5">Hungry Ram delivers a better solution that gives our clients in real estate and small businesses the edge over their competitors. We adopted a new method called Jamstack that provides the fastest and most secure websites. With our efficiently built webites, our clients see an average of 20% increase in conversion rates when they use our website!</p>
              <p>WordPress is the most used website builder in the world for real estate and small businesses. This means that all of your competitors are using it too, and that's a problem when you want to stand out.</p>
            </div>
            <div className="mt-5">
              <Link to="/contact" className="primary-button">Get in touch</Link>
            </div>
          </div>
        </div>
      </div>

      <Showcase />

      <Performance />

      <Review />

      <Features />

      <Closing />

    </Layout>
  )
}