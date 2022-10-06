import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import {AiFillMail} from "react-icons/ai"
import {AiFillNotification} from "react-icons/ai"
import {AiFillFolderOpen} from "react-icons/ai"
import {BsPeopleFill} from "react-icons/bs"
import {MdArticle} from "react-icons/md"
import DocTeaser from "../components/DocTeaser"

export default function Docs({ data }) {
    const speeches = data.speechz
    const articles = data.artz
    const essays = data.essayz
    const interviews = data.interviewz
    const letters = data.letterz
    const reports = data.reportz

 return (
    
        <Layout>
          
          <h4 id="top" className="font-display tracking-wide">Browse All Documents</h4>
   
   <section className="flex md:flex-row justify-between py-6 md-py-6">
  <button className="rounded-lg flex flex-col px-6 py-4 gap-2"><AiFillNotification className="mx-auto text-red-900"/><a href="#speeches" className="text-gray-800 font-display ">Speeches</a></button>
  <button className="rounded-lg flex flex-col px-6 py-4 gap-2"><MdArticle className="mx-auto text-red-900"/><a href="#articles" className="text-gray-800 font-display ">Articles</a></button>
  <button className="rounded-lg flex flex-col px-6 py-4 gap-2"><BsPeopleFill className="mx-auto text-red-900"/><a href="#interviews" className="text-gray-800 font-display ">Interviews</a></button>
  <button className="rounded-lg flex flex-col px-6 py-4 gap-2"><AiFillFolderOpen className="mx-auto text-red-900"/><a href="#reports" className="text-gray-800 font-display ">Reports</a></button>
  <button className="rounded-lg flex flex-col px-6 py-4 gap-2"><AiFillMail className="mx-auto text-red-900"/><a href="#letters" className="text-gray-800 font-display ">Letters</a></button>

   </section>
   <section id="speeches" className="py-8">
   <h5>Speeches</h5>
              <ul>
            {speeches.edges.map(edge => (
           <DocTeaser id={edge.node.drupal_internal__nid} title={edge.node.title} authors={edge.node.relationships?.field_author} summary={edge.node.field_summary?.value}/>
        ))}</ul>
        
   </section>
   <section id="articles" className="py-8">
   <div className="flex flex-row gap-2"><h3>Articles</h3><Link to={`#top`} className="text-xs">Go to top</Link></div>
              <ul>
            {articles.edges.map(edge => (
                                  <DocTeaser id={edge.node.drupal_internal__nid} title={edge.node.title} authorz={edge.node.relationships?.field_author} summary={edge.node.field_summary?.value}/>


        ))}</ul>
        
   </section>
   <section id="essays" className="py-8">
   <div className="flex flex-row gap-2"><h3>Essays</h3><Link to={`#top`} className="text-xs">Go to top</Link></div>
              <ul>
            {essays.edges.map(edge => (
                                 <DocTeaser id={edge.node.drupal_internal__nid} title={edge.node.title} authorz={edge.node.relationships?.field_author} summary={edge.node.field_summary?.value} />


        ))}</ul>
        
   </section>
   <section id="interviews" className="py-8">
   <div className="flex flex-row gap-2"><h3>Interviews</h3><Link to={`#top`} className="text-xs">Go to top</Link></div>
              <ul>
            {interviews.edges.map(edge => (
                                 <DocTeaser id={edge.node.drupal_internal__nid} title={edge.node.title} authorz={edge.node.relationships?.field_author} summary={edge.node.field_summary?.value}/>


        ))}</ul>
        
   </section>
   <section id="letters" className="py-8">
   <div className="flex flex-row gap-2"><h3>Letters</h3><Link to={`#top`} className="text-xs">Go to top</Link></div>
              <ul>
            {letters.edges.map(edge => (
                                 <DocTeaser id={edge.node.drupal_internal__nid} title={edge.node.title} authorz={edge.node.relationships?.field_author} summary={edge.node.field_summary?.value}/>


        ))}</ul>
        
   </section>
   <section id="reports" className="py-8">
   <div className="flex flex-row gap-2"><h3>Reports</h3><Link to={`#top`} className="text-xs">Go to top</Link></div>
              <ul>
            {reports.edges.map(edge => (
                                 <DocTeaser id={edge.node.drupal_internal__nid} title={edge.node.title} authorz={edge.node.relationships?.field_author} summary={edge.node.field_summary?.value}/>


        ))}</ul>
        
   </section>

  <section><Link to={`#top`}>Go to top</Link></section>
        
   





        </Layout>

 )
}



export const query = graphql`
  query {
  speechz:  allNodeDocuments(
    filter: {relationships: {field_object_type: {name: {eq: "Speech"}}}}
  ) {
    edges {
      node {
        title
        drupal_internal__nid
        field_summary {
          value
        }
        relationships {
          field_author {
            ... on node__people {
              title
            }
          }
        }
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
        field_summary {
          value
        }
        relationships {
          field_author {
            ... on node__people {
              title
            }
          }
        }
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
        field_summary {
          value
        }
        relationships {
          field_author {
            ... on node__people {
              title
            }
          }
        }
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
        field_summary {
          value
        }
        relationships {
          field_author {
            ... on node__people {
              title
            }
          }
        }
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
        field_summary {
          value
        }
        relationships {
          field_author {
            ... on node__people {
              title
            }
          }
        }
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
        field_summary {
          value
        }
        relationships {
          field_author {
            ... on node__people {
              title
            }
          }
        }
      }
    }
  }
}
`

