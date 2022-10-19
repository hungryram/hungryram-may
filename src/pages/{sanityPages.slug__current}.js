import * as React from "react"
import { graphql, Link } from 'gatsby'
import Intro from '../components/blocks/Intro'
import Layout from "../components/global/Layout"
import Features from "../components/home/Features"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"
import Seo from "../components/global/Seo"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Hero from "../components/templates/hero"
import Logos from "../components/templates/Logos"
import Form from "../components/templates/Form"

export default function SanityPages({ data }) {

    const pageBuilder = data.sanityPages.pageBuilder
    const seo = data.sanityPages.seo

    return (
        <>
        <Seo
          title={seo?.title_tag}
          description={seo?.meta_description}
        />
        <Layout>
          {pageBuilder?.map((section) => {
  
  
            if (section._type === 'intro') {
              return (
                <div key={section._key} className="section">
                  <Intro
                    heading={section.heading}
                    body={section._rawBody}
                  />
                </div>
              )
            }

            if (section._type === 'hero') {
                return (
                  <div key={section._key} className="section banner-section">
                    <Hero 
                        heading={section._rawHeading}
                        body={section._rawBody}
                    />
                  </div>
                )
              }
  
            if (section._type === 'features') {
              return (
                <Features
                  heading={section.heading}
                  features={section.blocks}
                  key={section._key}
                />
              )
            }
  
            if (section._type === 'image') {
              return (
                <div className="section" key={section._key}>
                  <div className="container text-center">
                    <GatsbyImage
                      image={section.asset.gatsbyImageData}
                      alt="Hungry Ram Web Design"
                    />
                  </div>
                </div>
              )
            }
  
            if (section._type === 'content') {
              return (
                <div className="section content" key={section._key}>
                  <div className="container">
                    <PortableText
                      value={section._rawContent}
                    />
                  </div>
                </div>
              )
            }

            if (section._type === 'logos') {
              return (
                <Logos 
                  key={section._key}
                />
              )
            }
  
            if (section._type === 'closer') {
              return (
                <div className="section content gradient-content text-center" key={section._key} style={{
                  backgroundColor: '#EDEFF3'
                }}>
                  <div className="container">
                    <div className="flex justify-center">
                      <div className="w-1/2">
                        {section?._rawContent &&
                          <PortableText
                            value={section?._rawContent}
                          />
                        }
                        {section?.buttonLink &&
                          <div className="my-10">
                            <Link to={section?.buttonLink} className="primary-button">{section?.buttonLabel}</Link>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
  
            if (section._type === 'imageText') {
              return (
                <div className="section content" key={section._key}>
                  <div className="container">
                    <div className={`md:flex gap-20 ${section.reverse ? 'flex-row-reverse' : ''}`}>
                      <div className="md:w-1/2">
                        {section._rawContent &&
                          <PortableText
                            value={section._rawContent}
                          />
                        }
                      </div>
                      <div className="md:w-1/2">
                        <GatsbyImage
                          image={section.image.asset.gatsbyImageData}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
  
            if (section._type === 'headingBody') {
              return (
                <div className="section" key={section._key}>
                  <div className="container">
                    <div className="grid md:grid-cols-2 content gradient-content md:gap-20">
                      <div>
                        {section._rawHeading &&
                          <PortableText
                            value={section._rawHeading}
                          />
                        }
                      </div>
                      <div>
                        {section._rawContent &&
                          <PortableText
                            value={section._rawContent}
                          />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
  
            if (section._type === 'faq') {
              return (
                <div className="section" key={section._key}>
                  <div className="container">
                    <div className="flex justify-center">
                      <div className="md:w-1/2">
                        <h2 className="text-2xl text-center mb-5">{section.heading}</h2>
                        <div className="mx-auto w-full rounded-2xl bg-white p-2">
                          {section.faqBlock.map((node) => {
                            return (
                              <>
                                <Disclosure>
                                  {({ open }) => (
                                    <>
                                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left font-medium text-black-500 hover:bg-blue-200 focus:outline-none my-2">
                                        <span>{node.question}</span>
                                        <ChevronUpIcon
                                          className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                        />
                                      </Disclosure.Button>
                                      <Disclosure.Panel className="px-4 py-10 text-gray-500">
                                        <PortableText
                                          value={node._rawAnswer}
                                        />
                                      </Disclosure.Panel>
                                    </>
                                  )}
                                </Disclosure>
                              </>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
  
            if (section._type === 'contactPage') {
              return (
                <div className="section-large" key={section._key}>
                  <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                      <div>
                        <div className="mb-10">
                          {section._rawContent &&
                            <PortableText
                              value={section._rawContent}
                            />
                          }
                        </div>
                        <p>Contact us today to:</p>
                        <ul>
                          <li className="my-5">Get a high-performing website</li>
                          <li className="my-5">Understand how modern web technology can improve your site</li>
                          <li className="my-5">Get consultation for your website project</li>
                        </ul>
                      </div>
                      <div>
                            <Form />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
  
          })}
        </Layout>
      </>
    )

}

export const query = graphql`
query ($id: String) {
  sanityPages(id: {eq: $id}) {
    seo {
      meta_description
      title_tag
    }
    title
    pageBuilder {
      ... on SanityFeatures {
        _key
        _type
        blocks {
          heading
          body
          _key
        }
        heading
      }
      ... on SanityImage {
        _key
        _type
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ... on SanityIntro {
        _key
        _type
        _rawBody
        _rawHeading
      }
      ... on SanityHeadingBody {
        _key
        _type
        _rawContent
        _rawHeading
      }
      ... on SanityContactPage {
        _key
        _rawContent
        _type
      }
      ... on SanityFaq {
        _key
        _type
        faqBlock {
          _rawAnswer
          question
        }
        heading
      }
      ... on SanityContent {
        _key
        _type
        _rawContent
      }
      ... on SanityImageText {
        _key
        _type
        _rawContent
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        reverse
      }
      ... on SanityCloser {
        _key
        _type
        _rawContent
        buttonLabel
        buttonLink
      }
      ... on SanityHero {
        _key
        _type
        _rawBody
        _rawHeading
      }
      ... on SanityLogos {
        _key
        _type
        heading
      }
    }
  }
}

`