export default {
    title: 'FAQ',
    name: 'faq',
    type: 'object',
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            title: 'FAQ',
            name: 'faqBlock',
            type: 'array',
            of: [{ type: 'faqSection' }]
        }
    ]
}