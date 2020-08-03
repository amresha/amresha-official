import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../templates/blog-style.css'

import 'bulma/css/bulma.css'
import './main.scss'
import '../templates/blog-style.css'

import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import avatar from "../../static/amresha.png"



class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        
        <div class="container">
      <div class="section">
        <div class="columns">
          <div class="column has-text-centered">
            <h1 class="title" style={{color: 'ghostwhite'}}>Bulma Card Layout Template</h1><br />
          </div>
        </div>
        <div id="app" class="row columns is-multiline">
          <div class="column is-4">
            <div class="card large">
              <div class="card-image is-16by9">
                <figure class="image">
                  <img src="" alt="Image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src={avatar} alt="Image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4 no-padding">Title One</p>
                    <p>
                      <span class="title is-6">
                        <a href="http://twitter.com"> Subtitle </a> </span> </p>
                    <p class="subtitle is-6">Subtitle</p>
                  </div>
                </div>
                <div class="content">
                  The content is not been written and will be added soon
                  <div class="background-icon"><span class="icon-twitter"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
