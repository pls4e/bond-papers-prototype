import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import MetadataBox from "../components/MetadataBox"
import Body from "../components/field/Body"

const DocPage = ({ data }) => {
  const doc = data.nodeDocuments
  const images = data.nodeDocuments.field_image_url
  const authors = data.nodeDocuments.relationships.field_author
  const peeps = data.nodeDocuments.relationships.field_all_people
  return (
    <Layout>
      <div className="float-right"> <Link to={'/allDocuments'}>Back to list</Link></div>
       <h1 className="md:text-4xl border-bottom border-gray-50 font-display tracking-wide">{ doc.title }</h1>
       <section className="italic py-4 text-sm border-b-2 border-t-gray-400">
       {doc.field_document_top != null ? <div dangerouslySetInnerHTML={{__html: doc.field_document_top.value}} className="tracking-wide"/> : ""}
        {doc.field_head != null ? <div dangerouslySetInnerHTML={{__html: doc.field_head.value}} className="tracking-wide"/> : ""}
       </section>
      <div className="mx-auto md:grid md:grid-cols-3 pt-2">
         {/*  <div className="flex flex-row gap-4">
                    <button className="p-4">Image</button>
                    <button className="p-4">Transcription</button>
                </div> */}
        <article className="col-span-2 min-w-full">
   
              <div dangerouslySetInnerHTML={{__html: doc.field_salutation?.value}}/>
                {doc.field_document_body ? <div className="pb-4 text-base font-normal tracking-wide text-stone-600"><Body content={doc.field_document_body?.value}/></div> : ""}
              {doc.field_signature != null ? <div dangerouslySetInnerHTML={{__html: doc.field_signature.value}} className="text-base font-light"/> : ""}

        <section>
        {doc.field_document_extra != null ? <div><span>Document Extra</span><div dangerouslySetInnerHTML={{__html: doc.field_document_extra.value}}/></div> : ""}
              {doc.field_document_marginalia != null ? <div><span>Document marginalia</span><div dangerouslySetInnerHTML={{__html: doc.field_document_marginalia.value}}/></div> : ""}
        </section>
        
        {/* Footnotes: need resolver to process the links to footnotes from body */}
                  {doc.field_footnote.length ? <section className="mt-4 border-t-2 border-gray-500 bg-stone-50"><span>Footnotes:</span>
                {doc.field_footnote?.map((footnote => (
                  <div dangerouslySetInnerHTML={{ __html: footnote.value }} />
                )))}</section> : ""}
          
          
        </article>

        <aside className="p-4 divide-y">   
    
        <section>{doc.field_summary != null ? <div className="metadata p-6 mt-6 shadow-sm rounded-lg bg-stone-50 flex flex-col font-light place-items-center"><span>Summary:</span><div dangerouslySetInnerHTML={{__html: doc.field_summary.value}}/></div> : ""} </section>  
       <section>{images.length ? <div className="p-6 shadow-sm rounded-lg metadata flex flex-col place-items-center bg-stone-50"><span>Images:</span><div className="flex flex-row gap-2 flex-wrap py-4 "> {images.map((image, key) => (
                  <a href={image.uri} target="_blank" rel="noreferrer"><img src={image.uri} className="thumb" alt="facsimile" /></a>

                ))} </div></div> : ''}</section> 
        
             <section>{authors.length ? <MetadataBox label="Author" field={authors} value={authors?.map((auth => (
                    <Link to={`../../people/${auth.drupal_internal__nid}`}>{auth.title}</Link>
                  )
                  ))}/> : ""}</section>
             
              <section>{doc.field_date != null ? <MetadataBox label="Date" value={doc.field_date.value} field={doc.field_date} /> : ''}</section>   
            <section>{doc.relationships.field_object_type != null ? <MetadataBox label="Type" value={doc.relationships.field_object_type.name} field={doc.relationships.field_object_type} /> : ''}</section> 
            <section>{doc.relationships.field_source != null ? <MetadataBox label="Source" value={doc.relationships.field_source.name} field={doc.relationships.field_source} /> : ''}</section> 
            {peeps.length ? <MetadataBox label="Related People" field={peeps} value={ <section><ul className="flex flex-col place-items-center">{peeps?.map((peep => (
                    
                    <li><Link to={`../../people/${peep.drupal_internal__nid}`}>{peep.title}</Link></li>
                  )
                  ))}</ul></section>}/>  : ""}   
        </aside>
        </div>
            <Link to={'/allDocuments'}>Back to list</Link>
    
    </Layout>
  )
}

export default DocPage

export const query = graphql`
  query($diid: Int) {
    nodeDocuments(drupal_internal__nid: { eq: $diid }) {
      drupal_internal__nid
      title
      field_document_body {
        value
    }
    field_date {
        value
    }
    field_document_top {
        value
    }
    field_image_url {
      uri
    }
    field_summary {
      value
    }
    field_head {
      value
    }
    field_footnote {
      value
    }
    field_document_top {
      value
    }
    field_document_length {
      value
    }
    field_document_extra {
      value
    }
    field_dateline {
      value
    }
    field_salutation {
      value
    }
    field_signature {
      value
    }
    field_marginalia {
      value
    }
    relationships {
        field_object_type {
          name
        }
        field_all_people {
          title
          drupal_internal__nid
        }
        field_source {
          name
          drupal_internal__tid
        }
      field_author {
        ... on node__people {
          id
          title
          drupal_internal__nid
        }
      }
    }
}
    
  }
    

`