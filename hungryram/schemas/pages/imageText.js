export default {
    title: 'Image and Text',
    name: 'imageText',
    type: 'object',
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
            options: {
                hotspot: true,
            }
        },
        {
            title: 'Alt Tag',
            name: 'altTag',
            type: 'string'
        },
        {
            title: 'Reverse Column',
            name: 'reverse',
            type: 'boolean'
        }
    ]
}