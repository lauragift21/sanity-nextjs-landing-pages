export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ece7d2c02a1c65bc961cc57',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-irc5yn5r',
                  apiId: '47194874-ed26-4b44-9fbe-ce9060036d91'
                },
                {
                  buildHookId: '5ece7d2c83e8e9906c122374',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tjc9ru2v',
                  apiId: '7c3b69b1-5de1-40ba-ae8c-5afbcb1afe95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lauragift21/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tjc9ru2v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
