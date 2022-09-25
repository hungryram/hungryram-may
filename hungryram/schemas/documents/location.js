export default {
    title: 'Locations',
    name: 'locations',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'URL',
            name: 'slug',
            type: 'slug',
            description: 'We recommend clicking generate. Changing URL may cause broken pages',
            options: {
              source: "title",
            },
        },
        {
            title: 'Header Image',
            name: 'headerImage',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            title: 'Hide Header',
            name: 'hidden',
            type: 'boolean'
        },
        {
            title: 'Page Builder',
            name: 'pageBuilder',
            type: 'array',
            of: [
                {type: 'hero'},
                {type: 'intro'},
                {type: 'image'},
                {type: 'features'},
                {type: 'headingBody'},
                {type: 'contactPage'},
                {type: 'faq'},
                {type: 'content'},
                {type: 'imageText'},
                {type: 'closer'},
            ]
        },
        {
            title: 'Search Engine Optimization',
            name: 'seo',
            type: 'seo',
            validation: Rule => Rule.required().error('Required for search engines')
        }
    ]
}