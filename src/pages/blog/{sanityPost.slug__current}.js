import { graphql } from "gatsby"
import * as React from "react"
import Intro from "../../components/blocks/Intro"
import Layout from "../../components/global/Layout"
import Seo from "../../components/global/Seo"
import { PortableText } from "@portabletext/react"
import { GatsbyImage } from "gatsby-plugin-image"
import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight"

export default function BlogList({ data }) {
  const post = data.sanityPost

  // Barebones lazy-loaded image component
  const SampleImageComponent = ({ value, isInline }) => {
    return (
      <img
        src={urlBuilder()
          .image(value)
          .fit('max')
          .auto('format')
          .dataset('production')
          .projectId('aid6jtqz')
          .url()}
        alt={value.alt || `${post.alt_tag}`}
        loading="lazy"
      />
    )
  }


  const components = {
    types: {
      image: SampleImageComponent,
      altTag: ({ value }) => <img src={urlBuilder().image(value.image).width(800).dataset('production').projectId('aid6jtqz').url()} alt={value.altTag} loading="lazy" className="my-10" />,
      leadForm: ({ value }) => (
        <div className="p-4 bg-[#e7f1fa] text-center">
          <h2 className="text-xl">{value.heading}</h2>
          <p>{value.subtitle}</p>
          <form name="leadform" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thank-you" className="w-full max-w-sm mx-auto">
            <input type="hidden" name="form-name" value="leadform" />
            <input name="bot-field" type="hidden" />
            <input type="hidden" name="Subject" value="Lead Form Signup" />
            <div className="flex items-center py-4">
              <input className="appearance-none bg-white w-full mr-3 py-4 px-2 leading-tight focus:outline-none text-black" type="text" placeholder="Enter your email" aria-label="Full name" />
              <button className="flex-shrink-0 py-4 px-4 rounded primary-bg text-sm text-white" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      ),

      blogForm: ({ value }) => (
        <div className="p-4 my-10 bg-[#e7f1fa]">
          <div className="text-center">
            <h2 className="text-xl">{value.heading}</h2>
            <p>{value.subtitle}</p>
          </div>
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
                      className="mt-1 p-2 bg-[#e9eff6] w-full"
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
                      className="mt-1 p-2 bg-[#e9eff6] w-full"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 p-2 bg-[#e9eff6] w-full"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="Phone"
                      id="phone"
                      autoComplete="tel"
                      className="mt-1 p-2 bg-[#e9eff6] w-full"
                    />
                  </div>


                  <div className="mt-1 col-span-6">
                    <textarea
                      id="about"
                      name="about"
                      rows={6}
                      className="mt-1 py-2 bg-[#e9eff6] w-full p-2"
                      placeholder="Your message, please include details about your business"
                    />
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4 text-center">
                  <p className="m-5 text-sm text-black">By submitting the form with your information above you are agreeing to our Terms and Conditions and Privacy Policy</p>
                  <button
                    type="submit"
                    className="primary-button px-20"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
  }

  return (
    <Layout>
      <Seo
        title={post.seo.title_tag}
        description={post.seo.meta_description}
        type="article"
        image={post.mainImage.asset.url}
        imageAlt={post.alt_tag}
      />
      <Intro
        heading={post.title}
      />
      <div className="section">
        <div className="container content blog-content">
          <div className="flex justify-center">
            <div className="md:w-3/5">
              <PortableText
                value={post._rawBody}
                components={components}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  sanityPost(id: {eq: $id}) {
    mainImage {
      asset {
        gatsbyImageData
        url
      }
    }
    title
    _rawBody
    alt_tag
    seo {
      meta_description
      title_tag
    }
  }
}


`