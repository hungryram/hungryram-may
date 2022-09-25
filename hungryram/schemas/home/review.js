export default {
    title: 'Review',
    name: 'review',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'blockContent'
        },
        {
            title: 'body',
            name: 'body',
            type: 'blockContent'
        },
        {
            title: 'name',
            name: 'Name',
            type: 'string'
        },
        {
            title: 'Position',
            name: 'position',
            type: 'string'
        },
        {
            title: 'Avatar',
            name: 'avatar',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'AltTag',
            name: 'altTag',
            type: 'string'
        },
    ]
}