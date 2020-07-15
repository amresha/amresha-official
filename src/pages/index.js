import React from "react"
import { Link } from "gatsby"
import 'bulma/css/bulma.css'

import Testinomials from "../components/testinomials"
import Mailchimp from "../components/Mailchimp"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Typist from 'react-typist';
import Flip from 'react-reveal/Flip';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';
import './main.scss'
import '../templates/blog-style.css'

class IndexPage extends React.Component {

  render() {
    const siteTitle = "Amresha | Personal Website"
    const words = ['Business Owners', 'Solopenuer', 'Femalepenuer', 'Bloggers'];

for (let i = 4; i < 18; i++) {
	words[i] = words[i - 4];
}

    return (
      <Layout location={this.props.location} >
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        
        <div class="tile is-ancestor">
          <div class="tile is-6 is-vertical is-parent">
            <div class="tile is-child box">
            <h1 class="title">
            Hey {" "}
            <span role="img" aria-label="wave emoji">
              👋
            </span> I'm Amresha
            </h1>              
            </div>
            <div class="tile is-child box">
            
              <p class="title">
              <h1>A Front-End Engineer and A Web Consultant, who likes to help</h1>

             <Typist className="TypistExample-header"
              avgTypingDelay={50}
              startDelay={1000}
              onTypingDone={this.onHeaderTyped}>
              {words.map((word, i) => (
                <span key={word}>
                  {word}
                  <Typist.Backspace
                    count={word.length}
                    delay={(i + 1) * 1000}
                  />
                </span>
              ))}
	          	</Typist>
      </p>
      
<p class="title">build super fast websites that boost sales.</p>
<p>These days I am working a lot on WordPress/Woocommerce migration to ReactJS powered websites and enhancing my tech skills by continuosly learning modern web technology.
</p>
<p className="title is-5">Lets connect and build something awesome  <span role="img" aria-label="heart emoji">
          ❤️
            </span> </p>
              <div class="columns is-mobile is-gapless">
              <div class="column is-1"><img style={{ width: '50%', margin: 0 }} src="./linkedin.svg" alt="LinkedIn" /> </div>
              <div class="column is-1"><img style={{width: '50%', margin: 0 }} src="./instagram.svg" alt="Instagram" /></div>
              <div class="column is-1"><img style={{ width: '50%', margin: 0 }} src="./twitter.svg" alt="Twitter" /></div>
              <div class="column is-1"><img style={{ width: '50%', margin: 0 }} src="./github.svg" alt="GitHub" /></div>
            </div>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
            </div>
          </div>

  
          <div class="tile is-parent">
            <div class="tile is-child box">

            <div class="columns is-multiline is-mobile is-vcentered is-gapless py-0 my-0">
  
  <div class="column is-half" style={{ textAlign: "center" }}>
    <code style={{ backgroundColor: "white" }}><img style={{ margin: 0 }} src="./hello.jpg" alt="Hello" /></code>
  </div>
  <div class="column is-half">
    <code style={{ backgroundColor: "white" }}><img style={{ margin: 0 }} src="./bonjour.jpg" alt="Bonjour" /></code>
  </div>
  
  <div class="column py-0 my-0" style={{ alignSelf: "flex-end" }}>
    <code style={{ backgroundColor: "white" }}><img style={{ margin: 0 }} src="./npnbet.jpg" alt="Npnbet" /></code>
  </div>
  <div class="column is-half">
    <code style={{ backgroundColor: "white" }}><img style={{ margin: 0 }} src="./avtar.jpg" alt="Amresha Avtar" /></code>
  </div>
  <div class="column">
    <code style={{ backgroundColor: "white" }}><img style={{ margin: 0 }} src="./hi.jpg" alt="Hi" /><img style={{ margin: 0 }} src="./ciao.jpg" alt="Ciao" /></code>
  </div>
  
</div>


            
            
              <p class="title"></p>
              
            </div>
          </div>
        </div>

       <div class="columns is-centered is-vcentered" style={{backgroundColor: '#2e1f3d', color:'white',  height: '80px', textAlign: 'center', marginBottom: 'none'}}>
       <div class="column is-vcentered">
       <div>
      
        <h1 class="title is-1" style={{color:'white'}}> <Flip left cascade>Tech Skills </Flip></h1>
       
      </div>
         
         
         </div>  
       </div>         
       <div class="tile is-ancestor" style={{backgroundColor: '#2e1f3d', color:'white', textAlign: 'center'}}>
        <div class="tile is-3 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child green post">
          <h1 class="title is-4" style={{color:'white', paddingTop: '25px', textDecorationLine: 'underline', textDecorationStyle: 'wavy', textDecorationColor: 'aqua'}}>Languages</h1>
                
	   <Flip top cascade>
     <div>
	   <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '72px' }} src="./js.png" alt="Javascript" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '72px' }} src="./html.png" alt="HTML5" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '72px' }} src="./CSS3.png" alt="CSS3" /> </h2></div>
           </div>
            <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./Sass.png" alt="Sass" /> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"> </h2></div>
          </div>	
          <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><br /><br /><br /></h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"> </h2></div>
            <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"> </h2></div>
          </div>	
    </div>
    </Flip>
    
          </article>
        </div>
      
        <div class="tile is-3 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child pink post">          
	  <h1 class="title is-4" style={{color:'white', paddingTop: '25px', textDecorationLine: 'underline', textDecorationStyle: 'wavy', textDecorationColor: 'aqua'}}>Libraries/Frameworks</h1>          
	                  <Flip left cascade>
                  <div>
                    <div class="columns is-mobile is-centered is-vcentered">
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./react.png" alt="React" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./nodejs.png" alt="NodeJS" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./bootstrap.png" alt="Bootstrap" /> </h2></div>
                    </div>
                    <div class="columns is-mobile is-centered is-vcentered">
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '62px' }} src="./graphql.png" alt="GraphQL" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./gatsby.png" alt="Gatsby" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0 }} src="./bulma.png" alt="Bulma" /> </h2></div>
                    </div>
                    <div class="columns is-mobile is-centered is-vcentered">
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./atom.png" alt="Styled Components" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '72px' }} src="./npm.png" alt="NPM" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="" alt="" /> </h2></div>
                    </div>
                    
                 </div>
                </Flip>
	
          </article>
        </div>
      
        <div class="tile is-3 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child pink post">          
	  <h1 class="title is-4" style={{color:'white', paddingTop: '25px', textDecorationLine: 'underline', textDecorationStyle: 'wavy', textDecorationColor: 'aqua'}}>CMS</h1>          
	                  <Flip left cascade>
                  <div>
                    <div class="columns is-mobile is-centered is-vcentered">
                    <div class="column is-12 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./netlifycms.png" alt="Netlify CMS" /> </h2></div>
                    </div>
                    <div class="columns is-mobile is-centered is-vcentered">
                    <div class="column is-12 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '42px' }} src="./Contentful.png" alt="Contentful" /> </h2></div>
                    </div>
                    <div class="columns is-mobile is-centered is-vcentered">
                    <div class="column is-12 is-centered" style={{ color:'white', textAlign: 'center'}}><h2 class="title is-6"><img style={{ margin: 0, height: '42px' }} src="./WordPress.png" alt="WordPress" /> </h2></div>
                    </div>
                    
                 </div>
                </Flip>
	
          </article>
        </div>

        <div class="tile is-3 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child gold post">
<h1 class="title is-4" style={{color:'white', paddingTop: '25px', textDecorationLine: 'underline', textDecorationStyle: 'wavy', textDecorationColor: 'aqua'}}>Miscellaneous</h1>
	  <Flip left cascade>
                  <div style={{paddingBottom: '15px'}}>
                    <div class="columns is-mobile is-centered is-vcentered">
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./git.png" alt="Git" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '72px' }} src="./github.png" alt="GitHub" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./vscode.png" alt="Visual Studio Code" /> </h2></div>
                    </div>
                    <div class="columns is-mobile is-centered is-vcentered">
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./Photoshop.png" alt="Photoshop" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '72px' }} src="./Illustrator.png" alt="Illustrator" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./Premiere.png" alt="Premiere" /> </h2></div>
                    </div>
                    <div class="columns is-mobile is-centered is-vcentered">
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '62px' }} src="./netlify.png" alt="Netlify" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '52px' }} src="./Squarespace.png" alt="Squarespace" /> </h2></div>
                    <div class="column is-4 is-centered" style={{ color:'white', textAlign: 'center', width:'100px'}}><h2 class="title is-6"><img style={{ margin: 0, height: '32px' }} src="./Wix.png" alt="Wix" /> </h2></div>
                    </div>         
                   
                  </div>
                </Flip>	
          </article>
        </div>
      </div>

        
        <div  class="columns is-mobile is-vcentered" style={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'whitesmoke'}}>
        <div class="column is-12"><Testinomials /></div>
        </div>
     
        <div  class="columns is-mobile is-vcentered">
        <div class="column is-12">
        <div class="tile is-ancestor">
        <div class="tile is-2 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child green post">
          <Flip left><img src="./me.png" class="newsletter-image" alt="me" /></Flip>
          </article>
        </div>
      
        <div class="tile is-5 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child pink post">          
          <h1 class="header"><Fade bottom>Sign Up For Newsletter</Fade></h1>
          <p class="description"><Fade bottom>Sign up to receive messages about new content, my thoughts on the web and subscriber only opportunities.</Fade></p>
          </article>
        </div>
      
        <div class="tile is-5 is-parent" style={{ alignSelf: 'center', verticalAlign: 'middle'}}>
          <article class="tile is-child gold post">
          <Fade bottom><Mailchimp /> </Fade>
          </article>
        </div>
      </div>    
        
        </div>
        </div>
        
   

       
      </Layout>
    )
  }
}

export default IndexPage

/*
<Typist className="TypistExample-header"

avgTypingDelay={50}

startDelay={2000}

onTypingDone={this.onHeaderTyped}>
<span> Solopenuer </span>
<Typist.Backspace count={11} delay={200} />
<span> Femalepenuer </span>
<Typist.Backspace count={13} delay={200} />
<span> Bloggers </span>
<Typist.Backspace count={9} delay={200} />
<span> Business Owners </span>
</Typist>
*/