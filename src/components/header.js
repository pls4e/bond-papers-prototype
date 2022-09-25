import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 mb-6 bg-gray-800">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
      <div style={{ maxWidth: `200px`, marginBottom: `1rem` }}>
      <Link
            to={`/`}
          >
      <StaticImage
        src="../images/bondlogo-white-yellow.png"
        alt="The Julian Bond Papers Project"
      />
      </Link>
    </div>
       
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
        <Link
            to={`/pages/479`}
            className="block font-thin mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white" 
          >
            The Project
          </Link>
          <Link
            to={`/allDocuments`}
            className="block mt-4 mr-4 font-thin text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Documents
          </Link>
          <Link
            to={`/allPeople`}
            className="block mt-4 mr-4 font-thin text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            People
          </Link>
          <Link
            to={`/pages/481`}
            className="block font-thin mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white" 
          >
            Editorial Method
          </Link>
          <Link
            to={`/doc-search`}
            className="block mt-4 mr-4 font-thin text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Search
          </Link>
          <Link
            to={`#`}
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Donate
          </Link>
        </div>
       
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
