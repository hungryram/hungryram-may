import { graphql, Link } from "gatsby"
import * as React from "react"
import Intro from "../../components/blocks/Intro"
import Layout from "../../components/global/Layout"
import Features from "../../components/home/Features"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"
import Seo from "../../components/global/Seo"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Hero from "../../components/templates/hero"

export default function ServicesDetail({ data }) {
  const pageBuilder = data.sanityServices?.pageBuilder
  const seo = data.sanityServices?.seo
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
                      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thank-you">
                        <input type="hidden" name="form-name" value="contact" />
                        <input name="bot-field" type="hidden" />
                        <input type="hidden" name="Subject" value="Website Contact Form" />
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                  First name
                                </label>
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="mt-1 border-b-2"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                  Last name
                                </label>
                                <input
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autoComplete="family-name"
                                  className="mt-1 border-b-2"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                  Email address
                                </label>
                                <input
                                  type="text"
                                  name="email-address"
                                  id="email-address"
                                  autoComplete="email"
                                  className="mt-1 border-b-2 w-full"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  name="Phone"
                                  id="phone"
                                  autoComplete="tel"
                                  className="mt-1 border-b-2 w-full"
                                />
                              </div>


                              <div className="mt-1 col-span-6">
                                <textarea
                                  id="about"
                                  name="about"
                                  rows={6}
                                  className="p-5 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-2 border-gray-300 rounded-md"
                                  placeholder="Your message, please include details about your business"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-4">
                            <p className="m-5 text-sm text-black">By submitting the form with your information above you are agreeing to our Terms and Conditions and Privacy Policy</p>
                          </div>
                          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                              type="submit"
                              className="primary-button px-20"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
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
  sanityServices(id: {eq: $id}) {
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
        heading
        _rawBody
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
    }
  }
}

`