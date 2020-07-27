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
        <SEO title="All posts" /> 
        <figure class="image is-fullwidth">
       <img style={{marginTop: '5.2rem'}} src={Blogheader} />
    </figure>        

        <div  class="columns is-mobile">
        <div class="column is-1-mobile is-one-fifth-tablet is-2-desktop is-one-quarter-widescreen is-one-fifth-fullhd"></div>     
        <div class="column is-10-mobile is-four-fifths-tablet is-three-quarters-desktop is-half-widescreen is-half-fullhd is-left">   
        
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const featuredImg = node.frontmatter.featuredimage

            const postDate = new Date(node.frontmatter.date)
            const month= postDate.toLocaleString('default', { month: 'short' })
            const day= postDate.toLocaleString('default', { day: '2-digit' })
            const year= postDate.toLocaleString('default', { year: 'numeric' })
            return (
              
              <div class="card">
              <div class="thumbnail"><img class="left" src={featuredImg}/></div>
              <div class="right">
                <h2><Link to={`/blog${node.fields.slug}`}> {title} </Link></h2>
                <div class="author"><img src={avatar}/>
                  <h5>Amresha Official</h5>
                </div>
                <h4>{day}</h4><br />
              <h6>{month}</h6><br /><br />
                <div class="separator"></div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
              
              <br /><br />
              <div class="fab" style={{color: 'white'}}><Link to={`/blog${node.fields.slug}`}> <div class="readmore">Read more</div></Link></div>
              
            </div>            
            )
          })}
          
        </div>
        
        <div class="column is-1-mobile is-1-tablet is-1-desktop is-1-widescreen is-1-fullhd"></div>   
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
