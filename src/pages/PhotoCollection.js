import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Photoheader from "../../static/photocollection-header.jpg"
import Layout from '../components/layout'
import Gallery from "../components/gallery"
import '../templates/blog-style.css'
import SEO from "../components/seo"

const PhotoCollection = ({ location }) => {
 
  return (
    <Layout
       location={location}
    >
          <SEO
          title="Amresha | Photo Collection"
          keywords={[`amresha`, `travel`, `photo`]}
          description="Travelled to Istanbul, Berlin, Paris, Amsterdam, Cologne and Zurich"
        />
   <figure class="image is-fullwidth">
   <img src={Photoheader} style={{marginTop: '7rem'}} />
    </figure>     
    <Gallery />
    </Layout>
  )
}

export default PhotoCollection