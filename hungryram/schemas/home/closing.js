export default {
    title: 'Closing',
    name: 'closing',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            title: 'Content',
            name: 'content',
            type: 'blockContent'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
        },
        {
            title: 'Alt Tag',
            name: 'altTag',
            type: 'string'
        },
        {
            title: 'Blocks',
            name: 'blocks',
            type: 'array',
            of: [{type: 'featureBlocks'}]
        }
    ]
}