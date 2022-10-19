export default {
    title: 'Box Buttons',
    name: 'boxButtons',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'array',
            of: [
                {type: 'homeBox'}
            ]
        },
    ]
}