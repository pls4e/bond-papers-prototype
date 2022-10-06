import React from "react"
import { Link } from "gatsby"
import {BsFillArrowRightCircleFill} from "react-icons/bs"

const DocTeaser = ({id, title, authorz, summary }) => {
     
        return (
            
            <li className="py-8 px-6 shadow-sm rounded-lg"> 
         
           <Link key={id} to={`/documents/${id}`} className="flex flex-row gap-4 place-items-center"><BsFillArrowRightCircleFill className=" text-red-800"/> <span className="font-display tracking-wide text-lg">{title}</span>
            </Link>
           <div className="flex flex-col py-1 text-sm font-light">
            { authorz?.map((author => (
                <span>{author.title}</span> 
            ))) } 
            <div dangerouslySetInnerHTML={{__html: summary}}/>
           
            </div>
         </li>
        
        )}

        export default DocTeaser