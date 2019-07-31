import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Video from "../../components/Video/Video"
import TimeLine from "../../components/Timeline/Timeline"

const info = [
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1956", desc: "Create timeline"},
  {date: "1957", desc: "Close timeline"}
]

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi, this is poet card</h1>
    <TimeLine info={info}/>
    <Video
      id="fvkncCBSxFI"
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage
