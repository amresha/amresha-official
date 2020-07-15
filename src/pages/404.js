import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../templates/blog-style.css'
import Testinomials from "../components/testinomials"
import Mailchimp from "../components/Mailchimp"
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import 'bulma/css/bulma.css'
import './main.scss'
import '../templates/blog-style.css'



class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <div class="tile is-ancestor" style={{ backgroundColor: 'whitesmoke', padding: '0px', margin: '0px'}}>
        <div class="tile is-2 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child green post">
          <Flip left><img src="./me.png" style={{ textAlign:'right' }} alt="me" /></Flip>
          </article>
        </div>
      
        <div class="tile is-6 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child pink post">          
          <h1 class="header"><Fade bottom>Sign Up For Newsletter</Fade></h1>
          <p class="description"><Fade bottom>Sign up to receive messages about new content, my thoughts on the web and subscriber only opportunities.</Fade></p>
          </article>
        </div>
      
        <div class="tile is-4 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child gold post">
          <Fade bottom><Mailchimp /> </Fade>
          </article>
        </div>
      </div>    
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
