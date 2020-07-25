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



class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <div class="columns" style={{backgroundColor: '#2e1f3d', color:'white', textAlign: 'center'}}>
<div class="column">
            <h1 class="title is-4" style={{color:'white', paddingTop: '25px', textDecorationLine: 'underline', textDecorationStyle: 'wavy', textDecorationColor: 'aqua'}}>Languages</h1>
            <Flip top cascade>
            <div>
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '70px' }} src="./js.png" alt="Javascript" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '70px' }} src="./html.png" alt="HTML5" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '70px' }} src="./CSS3.png" alt="CSS3" /> </h2></div>
            </div>
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '55px' }} src="./Sass.png" alt="Sass" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2> </h2></div>
            </div>	
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><br /><br /><br /></h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"> </h2></div>
            </div>
            </div>	
            </Flip>

  </div>
  <div class="column">
            <h1 class="title is-4" style={{color:'white', paddingTop: '25px', textDecorationLine: 'underline', textDecorationStyle: 'wavy', textDecorationColor: 'aqua'}}>Libraries/Frameworks</h1>          
            <Flip left cascade>
              <div>
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./react.png" alt="React" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./nodejs.png" alt="NodeJS" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./bootstrap.png" alt="Bootstrap" /> </h2></div>
            </div>
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '62px' }} src="./graphql.png" alt="GraphQL" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./gatsby.png" alt="Gatsby" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0 }} src="./bulma.png" alt="Bulma" /> </h2></div>
            </div>
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./atom.png" alt="Styled Components" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '72px' }} src="./npm.png" alt="NPM" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="" alt="" /> </h2></div>
            </div>
            </div>
            </Flip>
  </div>
<div class="column">
            <h1 class="title is-4" style={{color:'white', paddingTop: '25px', textDecorationLine: 'underline', textDecorationStyle: 'wavy', textDecorationColor: 'aqua'}}>CMS</h1>          
            <Flip left cascade>
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-12 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./netlifycms.png" alt="Netlify CMS" /> </h2></div>
            </div>
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-12 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '42px' }} src="./Contentful.png" alt="Contentful" /> </h2></div>
            </div>
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-12 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '42px' }} src="./WordPress.png" alt="WordPress" /> </h2><br /></div>
            </div>      
            </Flip>
</div>
<div class="column">
            <h1 class="title is-4" style={{color:'white', paddingTop: '25px', textDecorationLine: 'underline', textDecorationStyle: 'wavy', textDecorationColor: 'aqua'}}>Miscellaneous</h1>
            <Flip left cascade>
            <div style={{paddingBottom: '15px'}}>  
            <div class="columns is-mobile is-centered is-vcentered" style={{paddingBottom: '15px'}}>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./git.png" alt="Git" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '72px' }} src="./github.png" alt="GitHub" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./vscode.png" alt="Visual Studio Code" /> </h2></div>
            </div>
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./Photoshop.png" alt="Photoshop" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '72px' }} src="./Illustrator.png" alt="Illustrator" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./Premiere.png" alt="Premiere" /> </h2></div>
            </div>
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '62px' }} src="./netlify.png" alt="Netlify" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./Squarespace.png" alt="Squarespace" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '32px' }} src="./Wix.png" alt="Wix" /> </h2></div>
            </div> 
            </div>
            </Flip>	

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
