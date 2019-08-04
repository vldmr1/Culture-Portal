import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DevTeam from "../components/DevelopmentTeam/DevelopmentTeam"

import gerasikImage from "../assets/images/gerasik.jpg"
import vldmrImage from "../assets/images/vldmr1.jpg"
import velenaflowerImage from "../assets/images/velenaflower.jpg"
import maliaxandrImage from "../assets/images/maliaxandr.jpg"
import finnibyhImage from "../assets/images/finnibyh.jpg"

const Developers = () => (
  <Layout>
    <SEO title="Our Team" />
    <h1 style={{
      textAlign: `center`,
      margin: 0}}>
    ROLLING SCOPES SCHOOL TEAM #27</h1>
    <div 
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `center`,
      }}>
      {team.map( (el, index) => 
        <DevTeam 
          key={index}
          name={el.name} 
          image={el.image}
          github={el.github}
          />
        )
      }
    </div>
  </Layout>
)

const team = [
  {
    name: "Yauheni Herasimenka",
    github: "gerasik",
    image: gerasikImage
  },
  {
    name: "Vladimir Malygin",
    github: "vldmr1",
    image: vldmrImage
  },
  {
    name: "Aliaksandr Mamchyts",
    github: "maliaxandr",
    image: maliaxandrImage
  },
  {
    name: "Alena Yanchanka",
    github: "velenaflower",
    image: velenaflowerImage
  },
  {
    name: "Daniil Gaiduk",
    github: "finnibyh",
    image: finnibyhImage
  },
]


export default Developers