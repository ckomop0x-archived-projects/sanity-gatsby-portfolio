export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e18fa16506fbf89846b7d2a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1o4xq4tx',
                  apiId: '1957e359-0f06-406d-8d0a-3d17c630f4bf'
                },
                {
                  buildHookId: '5e18fa1610a1fe01fcf1d98b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xs2dyw5t',
                  apiId: '27fc66bc-2843-4872-b577-b18b23d96731'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ckomop0x/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xs2dyw5t.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
