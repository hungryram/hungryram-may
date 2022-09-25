export default {
    title: 'Showcase',
    name: 'showcase',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string',
        },
        {
            title: 'Image',
            name: 'image',
            type: 'array',
            of: [{type: 'subshowcase'}]
        }
    ]
}