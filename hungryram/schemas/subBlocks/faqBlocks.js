export default {
    title: 'Faq Blocks',
    name: 'faqSection',
    type: 'object',
    fields: [
        {
            title: 'Question',
            name: 'question',
            type: 'string'
        },
        {
            title: 'Answer',
            name: 'answer',
            type: 'blockContent'
        }
    ]
}