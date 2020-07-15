import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Gallery from '../components/gallery'
import '../templates/blog-style.css'


const indexQuery = graphql`
  query indexQuery {
    allFile (filter: {absolutePath: {regex: "E:/amresha/amresha/src/images/gallery/"}}) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const PhotoCollection = ({ location }) => {
  const data = useStaticQuery(indexQuery)
  return (
    <Layout
       location={location}
    >
   <figure class="image is-fullwidth">
   <img style={{marginTop: '7rem'}} src="./photocollection-header.jpg" />
    </figure>     
      <Gallery
        columns={width => {
          if (width < 700) {
            return 2
          } else if (width < 1000) {
            return 3
          } else {
            return 6
          }
        }}
        photos={data.allFile.edges}
      />
    </Layout>
  )
}

export default PhotoCollection