import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../templates/blog-style.css'
import Blogheader from "../../static/blog-header.jpg"
import avatar from "../../static/amresha.png"


class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    
    

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Amresha | All posts"
          keywords={[`blog`, `web design`, `amresha`, `front-end`]}
          description="Learn about latest web design trends and technologies"
        />

        <figure class="image is-fullwidth">
       <img style={{marginTop: '5.2rem'}} src={Blogheader} />
    </figure>        

    <div class="container">
      <div class="section">
        <div class="columns">
          <div class="column has-text-centered">
            <h1 class="title">Welcome to my blog post</h1>
          </div>
        </div>
       
        <div id="app" class="row columns is-multiline">
        {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const featuredImg = node.frontmatter.featuredimage

            const postDate = new Date(node.frontmatter.date)
            const month= postDate.toLocaleString('default', { month: 'short' })
            const day= postDate.toLocaleString('default', { day: '2-digit' })
            const year= postDate.toLocaleString('default', { year: 'numeric' })
            return (
          <div class="column is-4 is-two-thirds-tablet">
            <div class="card large">
              <div class="card-image is-16by9">
                <figure class="image">
                  <img src={featuredImg} alt="Image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">

                  <div class="media-content">
                    <h2 class="title is-4 no-padding"><Link to={`${node.fields.slug}`}> {title} </Link></h2>
                                     
                  </div>
                </div>
                <div class="content">
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                 </div>
              </div>
            </div>
          </div>
               )
              })}
        </div>
     
      </div>
    </div>
               
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredimage
          }
        }
      }
    }
  }
`
