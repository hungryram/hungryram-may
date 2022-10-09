export default {
    title: 'Hero',
    name: 'hero',
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
            title: 'Primary Cta Text',
            name: 'primaryCtaText',
            type: 'string'
        },
        {
            title: 'Secondary Cta Text',
            name: 'secondaryCtaText',
            type: 'string'
        }
    ]
}