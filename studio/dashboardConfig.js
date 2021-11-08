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
                  buildHookId: '618985841afe233a054caeed',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ch29qyf7',
                  apiId: '9ee4e5b3-f82f-486b-94d0-c9a941495328'
                },
                {
                  buildHookId: '61898584a1a41c3f6ac7191b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hkc1peve',
                  apiId: 'e8c55bb5-52fe-42d2-a9ed-acc575e109b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paulvakalis/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hkc1peve.netlify.app', category: 'apps'}
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
