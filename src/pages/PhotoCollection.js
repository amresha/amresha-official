import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Photoheader from "../../static/photocollection-header.jpg"
import Layout from '../components/layout'
import Gallery from "../components/gallery"
import '../templates/blog-style.css'

const PhotoCollection = ({ location }) => {
 
  return (
    <Layout
       location={location}
    >
   <figure class="image is-fullwidth">
   <img src={Photoheader} style={{marginTop: '7rem'}} />
    </figure>     
    <Gallery />
    </Layout>
  )
}

export default PhotoCollection