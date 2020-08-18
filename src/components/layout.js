import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import NavBar from "./Navbar"
import { Helmet } from "react-helmet"


import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
           
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          class="header-h3"
        >         
           
   
        </h3>
      )
    }
    return (
      <Wrapper>
        <Helmet>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
       
        <link rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content="../img/og-image.jpg"
        />

             <meta name="twitter:title" content={`${title}`} />
             <meta name="twitter:url" content={`https://amresha.netlify.app/` + `${title}`} />
             <meta name="twitter:description" content="Currently focusing on JAMSTACK and ReactJS powered websites." />
             <meta name="twitter:card" content="summary_large_image" />
	        	 <meta name="twitter:image" content="../img/og-image.jpg" />
        </Helmet>
        <div>
          <NavBar />
          <header>{header}</header>
          
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <span role="img" aria-label="heart emoji">
          ❤️
           </span>
           {` `}
         in React and NodeJS
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
 `

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
