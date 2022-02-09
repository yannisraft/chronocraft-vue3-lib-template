module.exports = {
    title: "Chronocraft Vue3 Library Template",
    description: "This is a description",
    theme: '@vuepress/theme-default',
    base: '/',
    themeConfig: {
        sidebar: [
            {
                text: 'Get Started',
                link: '/getstarted',
                children: [],
            },
            {
                text: 'About',
                link: '/about',
                children: [],
            },
            {
                text: 'Library Components',
                link: '/librarycomponents',
                children: [],
            },
            {
                text: 'Github',
                link: 'https://github.com/yannisraft/chronocraft-vue3-lib-template',
                children: [],
            }
        ]

    },
    docsRepo: 'https://gitlab.com/owner/name',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
}