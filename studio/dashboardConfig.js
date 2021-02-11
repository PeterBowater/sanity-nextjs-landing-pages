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
                  buildHookId: '6024ff530d6fb83e5c4b52df',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kn2y14f5',
                  apiId: 'eeb87702-b6bd-41c7-a295-bfba1822f2c4'
                },
                {
                  buildHookId: '6024ff5303fd9e1842d2dbe4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-krs7i7vh',
                  apiId: 'd4912aba-9379-4d5b-bf81-7d4cecb08a38'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PeterBowater/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-krs7i7vh.netlify.app', category: 'apps'}
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
