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
                  buildHookId: '5d8e4438a24467a32792369b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dykwqdtz',
                  apiId: 'ec4800bc-7925-4f5d-999d-db29eabcb8c8'
                },
                {
                  buildHookId: '5d8e4438eb12d7aecdf06da8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-knf8xfvu',
                  apiId: '199bd7bd-3bf4-4aab-aaa5-2265da7dea80'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HyperNicolas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-knf8xfvu.netlify.com', category: 'apps'}
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
