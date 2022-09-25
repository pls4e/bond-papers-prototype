import React from "react"

const MetadataBox = ({label, value, field}) => {
     
        return (
           <div>

            {field ? <div className="metadata p-6 mt-6 bg-stone-50 flex flex-col font-light place-items-center ">{label}:  <span>{value}</span>  </div>: 'null' }
            </div>
        
        )}

        export default MetadataBox