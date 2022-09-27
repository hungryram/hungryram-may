import * as React from "react";
import { Helmet } from "react-helmet";
import data from "../../../data/seo"

export default function Seo({ title, description, schemaMarkup, type, image, imageAlt }) {

  const titleTag = title;
  const metaDescription = description;

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'og:site_name',
          content: 'Hungry Ram Web Design',
        },
        {
          name: 'og:type',
          content: type ? type : 'website',
        },
        {
          name: 'og:image',
          content: image,
        },
        {
          name: 'og:image:alt',
          content: imageAlt,
        },
        {
          name: 'og:title',
          content: titleTag,
        },
        {
          name: 'og:description',
          content: metaDescription,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:title',
          content: titleTag,
        },
        {
          name: 'twitter:image',
          content: image,
        },
        {
          name: 'twitter:creator',
          content: '@ramdettmer'
        },
      ]}
    >
      {schemaMarkup &&
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      }
    </Helmet>
  )
}