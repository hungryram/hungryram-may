export default {
    title: 'Portfolio',
    name: 'portfolio',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Client Name',
            name: 'clientName',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            title: 'Speed',
            name: 'speed',
            type: 'string'
        },
        {
            title: 'Performance',
            name: 'performance',
            type: 'string'
        },
        {
            title: 'SEO',
            name: 'seoScore',
            type: 'string'
        },
        {
            title: 'Website Link',
            name: 'webLink',
            type: 'url'
        },
        {
            title: 'Introduction',
            name: 'introduction',
            type: 'text'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'blockContent'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Review',
            name: 'review',
            type: 'text'
        },
        {
            title: 'SEO',
            name: 'seo',
            type: 'seo'
        }
    ]
}