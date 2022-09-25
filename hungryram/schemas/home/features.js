export default {
    title: 'Features',
    name: 'features',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            title: 'heading',
            name: 'heading',
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