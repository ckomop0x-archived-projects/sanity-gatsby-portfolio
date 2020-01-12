import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    projects: allSanitySampleProject(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <div className="main"
           style={{backgroundImage: `url('https://res.cloudinary.com/ckomop0x/image/upload/v1578611534/ckomop0x.github.io/DSC_1201_txtdqb.jpg')`}}>
        <div className="main__title">Hello, I am Pavel Klochkov</div>
      </div>
      {/*<section style={{display: 'none'}}>*/}
      {/*  <div className="text text-start container">*/}
      {/*    <h2>When I started</h2>*/}
      {/*    <p>I started to code in 2006 in Saint-Petersburg. It was HTML, CSS and PHP.*/}
      {/*      After 1.5 years I changed my occupation and came back to Frontend in 2012.</p>*/}
      {/*  </div>*/}
      {/*  <a href="https://webtime.studio" title="My Webworks Portfolio" target="_blank">My personal WebStudio*/}
      {/*    page.*/}
      {/*  </a>*/}
      {/*</section>*/}
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        {projectNodes && (
          <ProjectPreviewGrid
            title='Latest projects'
            nodes={projectNodes}
            browseMoreHref='/archive/'
          />
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
