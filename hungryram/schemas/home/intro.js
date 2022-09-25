export default {
    title: 'Intro',
    name: 'intro',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            title: 'body',
            name: 'body',
            type: 'blockContent'
        }
    ]
}