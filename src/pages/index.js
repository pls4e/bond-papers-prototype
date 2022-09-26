import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
<div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // maxHeight: 600,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        alt="Julian Bond"
        src={
          "../images/hero.jpg"
        }
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "end",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <h1 className="text-6xl text-yellow-500 font-light mb-0 mr-6">JULIAN BOND</h1>
        <ul className="text-3xl font-thin text-white mr-6 mb-10">
<li>Civil Rights Leader</li>
        <li>Environmentalist</li>
        <li>Social Activist</li>
        <li>Politican</li>
        <li>Educator</li>
        <li>Writer</li>
        </ul>
        
      </div>
    </div>
    <div className="h-64">
    <h1 className="text-5xl py-4 text-rose-800 leading-tight tracking-wide font-light text-center">Celebrating the Works & <br/>Writings of a Civil Rights Icon</h1>
    <p className="text-center text-md text-zinc-500 tracking-widest ">By providing a freely available resource of digitized images, transcriptions, and annotations.

</p>
    </div>
  </Layout>
)

export default IndexPage
