import { MdOutlinePostAdd } from "react-icons/md"
const parent = "/blog"

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: MdOutlinePostAdd,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      description: 'We recommend clicking generate. Changing URL after publishing may cause broken pages',
      options: {
        source: "title"
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Image Alt Tag',
      name: 'alt_tag',
      type: 'string',
      description: 'Describe your main image',
      validation: Rule => Rule.required().warning('Describing images will help with ADA compliance and SEO')
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'seo',
      title: 'Search Engine Optimization',
      type: 'seo',
      validation: Rule => Rule.required().error('Required for search engines')
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
