import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import MetadataBox from "../components/MetadataBox"

const DocPage = ({ data }) => {
  const doc = data.nodeDocuments
  const images = data.nodeDocuments.field_image_url
  const authors = data.nodeDocuments.relationships.field_author
  const peeps = data.nodeDocuments.relationships.field_all_people
  return (
    <Layout>
      <div>
        <h1 className="md:text-4xl border-bottom border-gray-50">{ doc.title }</h1>
       
        <div className="mx-auto md:grid md:grid-cols-3 pt-6">
            <div id="textBox" className="col-span-2">
               {/*  <div className="flex flex-row gap-4">
                    <button className="p-4">Image</button>
                    <button className="p-4">Transcription</button>
                </div> */}
               
               <div className="py-6 pr-6 font-light leading-relaxed">
               {doc.field_summary != null ? <div dangerouslySetInnerHTML={{__html: `Summary:` + doc.field_summary.value}} className="p-4 italic text-sm bg-stone-50"/> : ""}
               {doc.field_document_top != null ? <div dangerouslySetInnerHTML={{__html: doc.field_document_top.value}} className="italic  bg-stone-50 p-2"/> : ""}
              {doc.field_document_salutation != null ? <div><span>Document Salutation</span><div dangerouslySetInnerHTML={{__html: doc.field_document_salutation.value}}/></div> : ""}

              {doc.field_document_body != null ?  <div dangerouslySetInnerHTML={{ __html: doc.field_document_body.value }} className="text-base py-4"/>: <div className="italic py-4">No value of field "document body"</div>}</div>
              {doc.field_document_extra != null ? <div><span>Document Extra</span><div dangerouslySetInnerHTML={{__html: doc.field_document_extra.value}}/></div> : ""}
              {doc.field_document_marginalia != null ? <div><span>Document marginalia</span><div dangerouslySetInnerHTML={{__html: doc.field_document_marginalia.value}}/></div> : ""}
              
            
               
              {doc.field_footnote.length != null && doc.field_footnote.length === 1 ?
                <>
                <span>Footnotes:</span>
                  <div dangerouslySetInnerHTML={{ __html: doc.field_footnote[0].value }} />
                </>
                :
                doc.field_footnote.length != null && doc.field_footnote.length >= 2 ?

                  doc.field_footnote.map((footnote, key) => (
                    <>
                  <span>Footnotes:</span>
                    <div dangerouslySetInnerHTML={{ __html: footnote.field_footnote.value }} key={key}/>
</>
                  )): ''}


</div>
              <div>

                {images ? <div className="flex flex-row gap-2 flex-wrap py-6 "> {images.map((image, key) => (
                  <a href={image.uri} target="_blank" rel="noreferrer"><img src={image.uri} className="thumb" alt="facsimile" /></a>

                ))} </div> : ''}

                <div className="metadata p-6  bg-zinc-50 flex flex-col font-light place-items-center">
                  <span>Author:</span>
                  {authors.length != null && authors.length === 1 ?
                    <Link to={`../../people/${authors[0].drupal_internal__nid}`}>{authors[0].title}</Link>
                    :
                    authors.length != null && authors.length >= 2 ?
                      authors.map((auth, key) => (
                        <Link to={`../../people/${auth.drupal_internal__nid}`}>{auth.title}</Link>
                      )

                      ) :
                      "No author specified"}
                </div>
                {doc.field_date != null ? <MetadataBox label="Date" value={doc.field_date.value} field={doc.field_date} /> : ''}
                {doc.relationships.field_object_type != null ? <MetadataBox label="Type" value={doc.relationships.field_object_type.name} field={doc.relationships.field_object_type} /> : ''}
                {doc.relationships.field_source != null ? <MetadataBox label="Source" value={doc.relationships.field_source.name} field={doc.relationships.field_source} /> : ''}

                <div className="metadata p-6 mt-6 bg-zinc-50 flex flex-col font-light place-items-center">
                  <span>Related People:</span>
                  {peeps.length != null && peeps.length === 1 ?
                    <Link to={`../../people/${peeps[0].drupal_internal__nid}`}>{peeps[0].title}</Link>
                    :
                    peeps.length != null && peeps.length >= 2 ?
                      peeps.map((peep, key) => (
                        <Link to={`../../people/${peep.drupal_internal__nid}`}>{peep.title}</Link>
                      )

                      ) :
                      "No related people specified"}
                </div>
              </div>
            </div>
            <Link to={'/allDocuments'}>Back to list</Link>
      </div>
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