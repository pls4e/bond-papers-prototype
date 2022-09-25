import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Docs({ data }) {
    // const allDocs = data.allNodeDocuments
    const speeches = data.speechz
    const articles = data.artz
    const essays = data.essayz
    const interviews = data.interviewz
    const letters = data.letterz
    const reports = data.reportz

 return (
    
        <Layout>
          <h1 id="top">Browse All Documents</h1>
   
   <section className="flex flex-row gap-2 py-6">
    <button className="bg-zinc-50 p-6"><a href="#speeches">Speeches</a></button>
   <button className="bg-zinc-50 p-6"><a href="#essays">Essays</a></button>
   <button className="bg-zinc-50 p-6"><a href="#articles">Articles</a></button>
   <button className="bg-zinc-50 p-6"><a href="#interviews">Interviews</a></button>
   <button className="bg-zinc-50 p-6"><a href="#reports">Reports</a></button>
   <button className="bg-zinc-50 p-6"><a href="#letters">Letters</a></button>
   </section>
   <section id="speeches" className="py-8">
   <h3>Speeches</h3>
              <ul>
            {speeches.edges.map(edge => (
           <li className="py-2"> 
              <Link key={edge.node.drupal_internal__nid} to={`/documents/${edge.node.drupal_internal__nid}`}>{edge.node.title}
                </Link>
           </li>
        ))}</ul>
        
   </section>
   <section id="articles" className="py-8">
   <div className="flex flex-row gap-2"><h3>Articles</h3><Link to={`#top`} className="text-xs">Go to top</Link></div>
              <ul>
            {articles.edges.map(edge => (
           <li className="py-2"> 
              <Link key={edge.node.drupal_internal__nid} to={`/documents/${edge.node.drupal_internal__nid}`}>{edge.node.title}
                </Link>
           </li>
        ))}</ul>
        
   </section>
   <section id="essays" className="py-8">
   <div className="flex flex-row gap-2"><h3>Essays</h3><Link to={`#top`} className="text-xs">Go to top</Link></div>
              <ul>
            {essays.edges.map(edge => (
           <li className="py-2"> 
              <Link key={edge.node.drupal_internal__nid} to={`/documents/${edge.node.drupal_internal__nid}`}>{edge.node.title}
                </Link>
           </li>
        ))}</ul>
        
   </section>
   <section id="interviews" className="py-8">
   <div className="flex flex-row gap-2"><h3>Interviews</h3><Link to={`#top`} className="text-xs">Go to top</Link></div>
              <ul>
            {interviews.edges.map(edge => (
           <li className="py-2"> 
              <Link key={edge.node.drupal_internal__nid} to={`/documents/${edge.node.drupal_internal__nid}`}>{edge.node.title}
                </Link>
           </li>
        ))}</ul>
        
   </section>
   <section id="letters" className="py-8">
   <div className="flex flex-row gap-2"><h3>Letters</h3><Link to={`#top`} className="text-xs">Go to top</Link></div>
              <ul>
            {letters.edges.map(edge => (
           <li className="py-2"> 
              <Link key={edge.node.drupal_internal__nid} to={`/documents/${edge.node.drupal_internal__nid}`}>{edge.node.title}
                </Link>
           </li>
        ))}</ul>
        
   </section>
   <section id="reports" className="py-8">
   <div className="flex flex-row gap-2"><h3>Reports</h3><Link to={`#top`} className="text-xs">Go to top</Link></div>
              <ul>
            {reports.edges.map(edge => (
           <li className="py-2"> 
              <Link key={edge.node.drupal_internal__nid} to={`/documents/${edge.node.drupal_internal__nid}`}>{edge.node.title}
                </Link>
           </li>
        ))}</ul>
        
   </section>
{/* <section>

          <div id="all">
              <ul>
            {allDocs.edges.map(edge => (
           <li className="py-2"> 
              <Link key={edge.node.drupal_internal__nid} to={`/documents/${edge.node.drupal_internal__nid}`}>{edge.node.title}
                </Link>
           </li>
        ))}</ul>
        </div>
  </section> */}

  <section><Link to={`#top`}>Go to top</Link></section>
        
   





        </Layout>

 )
}



export const query = graphql`
  query {
    allNodeDocuments {
    edges {
      node {
        drupal_internal__nid
        title
      }
    }
  }
  speechz:  allNodeDocuments(
    filter: {relationships: {field_object_type: {name: {eq: "Speech"}}}}
  ) {
    edges {
      node {
        title
        drupal_internal__nid
      }
    }
  }
  artz:  allNodeDocuments(
    filter: {relationships: {field_object_type: {name: {eq: "Article"}}}}
  ) {
    edges {
      node {
        title
        drupal_internal__nid
      }
    }
  }
  essayz:  allNodeDocuments(
    filter: {relationships: {field_object_type: {name: {eq: "Essay"}}}}
  ) {
    edges {
      node {
        title
        drupal_internal__nid
      }
    }
  }
  interviewz:  allNodeDocuments(
    filter: {relationships: {field_object_type: {name: {eq: "Interview"}}}}
  ) {
    edges {
      node {
        title
        drupal_internal__nid
      }
    }
  }
  letterz:  allNodeDocuments(
    filter: {relationships: {field_object_type: {name: {eq: "Letter"}}}}
  ) {
    edges {
      node {
        title
        drupal_internal__nid
      }
    }
  }
  reportz:  allNodeDocuments(
    filter: {relationships: {field_object_type: {name: {eq: "Report"}}}}
  ) {
    edges {
      node {
        title
        drupal_internal__nid
      }
    }
  }
}
`

