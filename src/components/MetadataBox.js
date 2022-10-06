import React from "react"

const MetadataBox = ({label, value, field}) => {
     
        return (
           <div className="first:mt-0 last:mb-0">

            {field ? <div className="metadata p-6 shadow-sm rounded-lg bg-stone-50 flex flex-col font-light place-items-center ">{label}:  <span>{value}</span>  </div>: 'null' }
            </div>
        
        )}

        export default MetadataBox