import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Docs({ data }) {
    const allDocs = data.allNodePeople
 return (
    
        <Layout>
          <h1 id="top">Browse All People</h1>
   
<section>
          <div>
              <ul className="people-gallery">
            {allDocs.edges.map(edge => (
           <li className="py-2 bg-zinc-50"> 
              <Link key={edge.node.drupal_internal__nid} to={`/people/${edge.node.drupal_internal__nid}`}>{edge.node.title}
                </Link>
           </li>
        ))}</ul>
        </div>
        <Link to={`#top`}>Go to top</Link>
   </section>





        </Layout>

 )
}



export const query = graphql`
  query {
    allNodePeople(sort: {fields: relationships___node__documents___status, order:DESC}) {
    edges {
      node {
        drupal_internal__nid
        title
      }
    }
  }
  }
`

