import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Docs({ data }) {
    const docList = data.nodePeople.relationships.node__documents
 return (
    
        <Layout>
          <h1 id="top">{data.nodePeople.title}</h1>
          {data.nodePeople.field_additional_names ? <h3 className="italic font-light py-2">a.k.a: {data.nodePeople.field_additional_names.value}</h3>: "" }
        <section>
            <h5>{data.nodePeople.field_birth_date ? data.nodePeople.field_birth_date.value: "date unspecified"} to  {data.nodePeople.field_death_date ? data.nodePeople.field_death_date.value : "date unspecified"}</h5>
        </section>
        {data.nodePeople.field_description ? 
        <section className="py-4">
          <h6>About:</h6>
            <div dangerouslySetInnerHTML={{__html: data.nodePeople.field_description.value }}/>
        </section> : "No description available"
        }
        <section>
            <h2 className="py-4">Related Documents:</h2>
            <ul>
            {docList.map(edge => (
           <li className="py-2"> 
              <Link  key={edge.drupal_internal__nid} to={`../../documents/${edge.drupal_internal__nid}`}>{edge.title}
                </Link>
           </li>
        ))}</ul>
        </section>
<section>
        <Link to={`#top`}>Go to top</Link>
   </section>





        </Layout>

 )
}



export const query = graphql`
  query($piid: Int) {
    nodePeople(drupal_internal__nid: { eq: $piid }) {
        drupal_internal__nid
        title
        field_birth_date {
            value
          }
        field_death_date {
            value
          }
        field_description {
            value
        }
        field_additional_names {
          value
        }
        
        relationships {
            node__documents {
              drupal_internal__nid
              title
            }
          }  
  }
  }
`

