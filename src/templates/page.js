import React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/layout"

export default function Docs({ data }) {
 return (
    
        <Layout>
          <h1 id="top">{data.nodePage.title}</h1>
          <section className="py-8">
            { data.nodePage.gva_pagebuilder_content ? <div dangerouslySetInnerHTML={{__html: data.nodePage.gva_pagebuilder_content }}/>: "No page data yet."}
          </section>
            
<section>
     
   </section>





        </Layout>

 )
}



export const query = graphql`
  query($pgid: Int) {
    nodePage(drupal_internal__nid: { eq: $pgid }) {
        drupal_internal__nid
        title
        gva_pagebuilder_content
        body {
            value
          }        
  }
  }
`

