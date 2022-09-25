import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/global/Layout"
import UpCity from "../images/best-web-developer-upcity.png"
import Performance from "../components/home/Performance"
import Review from "../components/home/Review"
import Features from "../components/home/Features"
import Closing from "../components/home/Closing"
import Showcase from "../components/home/Showcase"
import Seo from "../components/global/Seo"
import { PortableText } from "@portabletext/react"
import Hero from "../components/templates/hero"


export default function Home({ data }) {

  const homeData = data.sanityHome

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
      <Hero
        heading={homeData.hero._rawHeading}
        body={homeData.hero._rawBody}
      />
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
            alt="SERHANT."
            class="m-5"
          />
          <StaticImage
            src="../images/c21garlandlogo2.png"
            width={150}
            alt="SERHANT."
            class="m-5"
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
            class="m-5"
          />
        </div>
      </div>

      <div className="py-10 z-10 relative">
        <div className="container primary-bg flex justify-center text-center rounded-xl">
          <div className="w-5/6 text-white py-10">
            <h2 className="third-heading">Award winning web designs</h2>
            <div className="py-10 md:flex flex justify-center text-center">
              <div className="m-5">
                <a href="https://www.expertise.com/ca/anaheim/web-developers" /> <img width="190" height="160" src="https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_auto/remote_media/awards/ca_anaheim_web-developers_2022_inverse.svg" alt="Top Web Developer in Anaheim" />
              </div>
              <div className="m-5">
                <img src="https://res.cloudinary.com/hungryram19/image/upload/v1647290400/hungryram/most-reviewed-agency.png" width="120" alt="" />
              </div>
              <div className="m-5">
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
            <div className="md:w-1/2 w-full mt-10 content gradient-content">
              {homeData.intro._rawHeading &&
              <PortableText
                  value={homeData.intro._rawHeading}
              />
              }
            </div>
            <div className="md:columns-2 mt-10 content gradient-content">
              <PortableText
                value={homeData.intro._rawBody}
              />
            </div>
            <div className="mt-5">
              <Link to="/contact" className="primary-button">Get in touch</Link>
            </div>
          </div>
        </div>
      </div>

      <Showcase 
        showcase={homeData.showcase.image}
      />

      <Performance 
        heading={homeData.performance._rawHeading}
        body={homeData.performance._rawBody}
        featureOne={homeData.performance._rawFeatureOne}
        featureTwo={homeData.performance._rawFeatureTwo}
        image={homeData.performance.image.asset.gatsbyImageData}
        altTag={homeData.performance.altTag}
      />

      <Review 
        body={homeData.review._rawBody}
        avatar={homeData.review.avatar.asset.gatsbyImageData}
        position={homeData.review.position}
        name={homeData.review.Name}
        image={homeData.review.image.asset.gatsbyImageData}
      />

      <Features 
        heading={homeData.features.heading}
        features={homeData.features.blocks}
      />

      <Closing 
        content={homeData.closing._rawContent}
        features={homeData.closing.blocks}
        image={homeData.closing.image.asset.gatsbyImageData}
        altTag={homeData.closing.altTag}
      />

    </Layout>
  )
}


export const query = graphql`
{
  sanityHome {
    hero {
      _rawBody
      _rawHeading
    }
    intro {
      _rawBody
    }
    performance {
      _rawBody
      _rawFeatureOne
      _rawFeatureTwo
      _rawHeading
      altTag
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    review {
      _rawBody
      altTag
      avatar {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      position
      Name
    }
    features {
      heading
      blocks {
        heading
        body
      }
    }
    closing {
      _rawContent
      blocks {
        body
        heading
      }
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    showcase {
      heading
      image {
        link
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}

`