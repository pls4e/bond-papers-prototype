import React from "react";
import {Link} from "gatsby"
export default function HeaderLink({ path, content }) {
  return (
    <Link
            to={path}
            className="block font-thin tracking-widest uppercase text-xs mt-4 mr-5 text-white lg:inline-block lg:mt-0 hover:text-gray-300 no-underline " 
          >{content}</Link>
  );
}