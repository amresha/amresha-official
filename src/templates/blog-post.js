import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DiscussionEmbed } from 'disqus-react'
import { Helmet } from 'react-helmet'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const featuredImg = '../../' + post.frontmatter.featuredimage
    const siteUrl = 'https://amresha.netlify.app/' + post.frontmatter.title
    const disqusprops = {
      shortname: `amresha`,
      config: { 
        url: siteUrl,
        identifier: post.frontmatter.title,
        title: post.frontmatter.title,    
      },
    };
    console.log(siteUrl)
    return (
      <Layout location={this.props.location} title="">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
         <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
             <meta name="image" content={`https://amresha.netlify.app/` + `${post.frontmatter.featuredimage}`} />
             <meta property="og:image" content={`https://amresha.netlify.app/` + `${post.frontmatter.featuredimage}`} />
             <meta property="og:title" content={`${post.frontmatter.title}`} />
             <meta property="og:description" content={`${post.frontmatter.description}`} />
             <meta property="og:url" content={`https://amresha.netlify.app/` + `${post.frontmatter.title}`} />
             <meta property="og:site_name" content="https://amresha.netlify.app/" />
             <meta property="article:author" content="Amresha" />
             <meta name="twitter:title" content={`${post.frontmatter.title}`} />
             <meta name="twitter:url" content={`https://amresha.netlify.app/` + `${post.frontmatter.title}`} />
             <meta name="twitter:description" content={`${post.frontmatter.description}`} />
             <meta name="twitter:card" content="summary_large_image" />
	        	 <meta name="twitter:image" content={`https://amresha.netlify.app/` + `${post.frontmatter.featuredimage}`} />
          </Helmet>
        <div  class="columns is-mobile">
        <div class="column is-1"></div>     
        <div class="column is-10">   
        <h1 style={{
            ...scale(3 / 5),
            display: `block`,
            marginTop: rhythm(3.5),
            paddingBottom: '18px',
            fontSize: '2.7rem',
            fontWeight: '700',
            fontFamily: 'sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue',
            color: '#340159',
            textAlign: 'center',
            lineHeight: '3rem',
          }}>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(0.1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
            textAlign: 'center',
          }}
        >
          {post.frontmatter.date}
        </p>
        <div style={{textAlign: 'center'}}><img style={{width: '85%', borderRadius: '1%'}} src= {featuredImg}/></div>
        <MDXRenderer>{post.body}</MDXRenderer>
        
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: '20px',
          }}
        >
          <li>
            {previous && (
              <Link to={`${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        </div>
        <div class="column is-1"></div>   
        </div>

        <div  class="columns is-mobile">
        <div class="column is-1"></div> 
        <div class="column is-10">
        <DiscussionEmbed
    shortname={disqusprops.shortname}
    config={disqusprops.config}
    /></div>  
    <div class="column is-1"></div> 
    </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredimage
      }
    }
  }
`
