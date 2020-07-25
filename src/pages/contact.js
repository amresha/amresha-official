import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contactheader from "../../static/contact-header.jpg"


class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact" />
        <figure class="image is-fullwidth">
       <img style={{marginTop: '5.2rem'}} src={Contactheader} />
    </figure>   
 

     <div class="columns is-mobile is-vcentered">
      <div class="column is-3"></div>
      <div class="column is-6"><h1>Get in touch</h1></div> 
      <div class="column is-3"></div>  
     </div>
    
               
      <div  class="columns is-mobile is-vcentered">
        <div class="column is-12">
        <div class="tile is-ancestor">
        <div class="tile is-3 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child green post">
         
          </article>
        </div>
      
        <div class="tile is-6 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child pink post" >          
          <form
                  name="contact"
                  method="post"
                  action="/contact-us/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      Send
                    </button>
                  </div>
                </form>
          </article>
        </div>
      
        <div class="tile is-3 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child gold post">
        
          </article>
        </div>
      </div>    
        
        </div>
        </div>
    
     
                
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
