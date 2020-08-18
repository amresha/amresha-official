/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import bioImg from "../../static/amresha-icon.png"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <img
              src={bioImg}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 75,
                borderRadius: `100%`,
                width: `4%`,
                height: 75,
              }}
              
            />
            <p>
            <strong>{author}</strong> is an experienced front-end engineer and a web consultant, currently focusing on  <strong>JAMSTACK</strong> and  <strong>ReactJS</strong> powered websites.
            {` `}
              <a href="https://twitter.com/amreshaofficial">Follow me on Twitter</a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {

    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
