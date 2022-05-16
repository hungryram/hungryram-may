const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = async ({node, getNode, actions, store, cache, getCache, createContentDigest }) => {

    const { createNode } = actions;


    // Generate Portfolio Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'portfolio' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-portfolio`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Portfolio',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Blog Post Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'blog' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-blog`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Blog',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    

    // Generate Legal Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'legal' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-legal`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Legal',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Services Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'services' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-services`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Service',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Team Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'documentation' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-documentation`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Documentation',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Partners Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'partners' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-partners`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Partner',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

}