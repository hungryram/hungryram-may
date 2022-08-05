import { graphql } from "gatsby"
import * as React from "react"
import Intro from "../../components/blocks/Intro"
import Layout from "../../components/global/Layout"
import Seo from "../../components/global/Seo"
import { PortableText } from "@portabletext/react"
import { GatsbyImage } from "gatsby-plugin-image"
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'

export default function BlogList({ data }) {
  const post = data.sanityPost

// Barebones lazy-loaded image component
const SampleImageComponent = ({value, isInline}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlBuilder()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .dataset('production')
        .projectId('aid6jtqz')
        .url()}
      alt={value.alt || `${post.alt_tag}`}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}


const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
}

  return (
    <Layout>
      <Seo
        title={post.seo.title_tag}
        description={post.seo.meta_description}
      />
      <Intro
        heading={post.title}
      />
      <div className="section">
        <div className="container flex justify-center">
          <GatsbyImage
            image={post.mainImage.asset.gatsbyImageData}
            alt={post.alt_tag}
          />
        </div>
      </div>
      <div className="section">
        <div className="container content">
          <PortableText
            value={post._rawBody}
            components={components}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  sanityPost (id: {eq: $id}){
    mainImage {
      asset {
        gatsbyImageData
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