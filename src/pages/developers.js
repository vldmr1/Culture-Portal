import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DevTeam from "../components/DevelopmentTeam/DevelopmentTeam"


const team = [
  {
    name: "Yauheni Herasimenka",
    github: "gerasik",
    image: "gerasik.jpg"
  },
  {
    name: "Vladimir Malygin",
    github: "vldmr1",
    image: "vldmr.jpg"
  },
  {
    name: "Aliaksandr Mamchyts",
    github: "maliaxandr",
    image: "maliaxandr.jpg"
  },
  {
    name: "Alena Yanchanka",
    github: "velenaflower",
    image: "velenaflower.jpg"
  },
  {
    name: "Daniil Gaiduk",
    github: "finnibyh",
    image: "finnibyh.jpg"
  },
]

const SecondPage = () => (
  <Layout>
    <SEO title="Our Team" />
    <h1>Rolling Scopes School team #27</h1>
    <div 
      style={{
        background: `pink`,
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

export default SecondPage