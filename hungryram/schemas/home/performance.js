export default {
    title: 'Performance',
    name: 'performance',
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
        {
            title: 'Feature One',
            name: 'featureOne',
            type: 'blockContent',
        },
        {
            title: 'Feature Two',
            name: 'featureTwo',
            type: 'blockContent',
        }
    ]
}