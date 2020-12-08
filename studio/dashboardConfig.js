export default {
  widgets: [
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
                  buildHookId: '5fcf244740cd2b7395e81865',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4bx2j71i',
                  apiId: '8be954d7-17a3-497d-9cdc-d95d8fe77842'
                },
                {
                  buildHookId: '5fcf244840cd2b6878e81b75',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-u13amvky',
                  apiId: '4d35b9c4-ade1-481f-91f4-baaacc71a2a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/razaali333/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-u13amvky.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
