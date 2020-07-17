import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Gallery from "../components/gallery"
import '../templates/blog-style.css'

const PhotoCollection = ({ location }) => {
 
  return (
    <Layout
       location={location}
    >
   <figure class="image is-fullwidth">
   <img style={{marginTop: '7rem'}} src="./photocollection-header.jpg" />
    </figure>     
    <Gallery />
    </Layout>
  )
}

export default PhotoCollection