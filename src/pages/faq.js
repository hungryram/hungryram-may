import * as React from "react"
import Intro from "../components/blocks/Intro"
import Layout from "../components/global/Layout"
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { graphql } from "gatsby"
import Seo from "../components/global/Seo"

export default function Faq({ data }) {
    const faq = data.faq.frontmatter
    return (
        <Layout>
                        <Seo
                title={faq.search_engine_optimization.title_tag}
                description={faq.search_engine_optimization.meta_description}
            />
            <Intro
                heading="Frequently Asked Questions"
                body="Have any questions about our services? You may find an answer in our FAQ. If not, please send us a message."
            />
                        <div className="section">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl text-center mb-5">General FAQ</h2>
                            <div className="mx-auto w-full rounded-2xl bg-white p-2">
                                {faq.real_estate_faq.map((node) => {
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
                                                           {node.answer}
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
            <div className="section">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl text-center mb-5">Small Business Website FAQ</h2>
                            <div className="mx-auto w-full rounded-2xl bg-white p-2">
                                {faq.small_business_faq.map((node) => {
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
                                                           {node.answer}
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
            <div className="section">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl text-center mb-5">Real Estate Website FAQ</h2>
                            <div className="mx-auto w-full rounded-2xl bg-white p-2">
                                {faq.general_faq.map((node) => {
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
                                                           {node.answer}
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

        </Layout>
    )
}

export const query = graphql`
{
    faq: markdownRemark(fileAbsolutePath: {regex: "/.*content\\/pages\\/faq/"}) {
      frontmatter {
        title_tag
        meta_description
        featured_image
        title
        general_faq {
          answer
          question
        }
        real_estate_faq {
          answer
          question
        }
        small_business_faq {
          answer
          question
        }
        search_engine_optimization {
            title_tag
            meta_description
        }
      }
    }
  }
`