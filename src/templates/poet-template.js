import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/Video/Video"
import TimeLine from "../components/Timeline/Timeline"
import WorksList from "../components/WorksList/WorksList"
import Map from "../components/Map/Map"
import Gallery from "../components/Gallery/Gallery"
import AboutAuthor from "../components/AboutAuthor/AboutAuthor"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"


const PoetPage = ( { data, intl} ) => {
  return (
    <Layout>
      <SEO title={data.poetsJson[intl.locale].name} />
      <AboutAuthor
        picture={data.poetsJson.photo}
        name={data.poetsJson[intl.locale].name}
        date={data.poetsJson.yearsOfLife}
        description={data.poetsJson[intl.locale].bio}/>
      <TimeLine info={data.poetsJson[intl.locale].timeline}/>
      <Video id={data.poetsJson.video} />
      <WorksList worksList={data.poetsJson[intl.locale].works_list} />
      <Map id={data.poetsJson.mapId}/>
      <Gallery images={data.poetsJson.gallery} />
    </Layout>
  )
};

export default injectIntl(PoetPage);

export const query = graphql`
query($slug: String!) {
  poetsJson(fields: { slug: { eq: $slug } }) {
    id
    yearsOfLife
    photo
    video
    mapId
    ru {
      name
      location
      bio
      timeline {
        time
        title
        desc
      }
      works_list {
        group
        works {
          name
          date
        }
      }
    }
    be {
      name
      location
      bio
      timeline {
        time
        title
        desc
      }
      works_list {
        group
        works {
          name
          date
        }
      }
    }
    en {
      name
      location
      bio
      timeline {
        time
        title
        desc
      }
      works_list {
        group
        works {
          name
          date
        }
      }
    }
    gallery
  }
}
`