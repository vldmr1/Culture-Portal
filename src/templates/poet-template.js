import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/Video/Video"
import TimeLine from "../components/Timeline/Timeline"
import WorksList from "../components/WorksList/WorksList"
import { graphql, Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"


const PoetPage = ( { data, intl} ) => {
  return (
    <Layout>
      <SEO title={data.poetsJson[intl.locale].name} />
      <h1>
        {data.poetsJson[intl.locale].name}
      </h1>
      <TimeLine info={data.poetsJson[intl.locale].timeline}/>
      <Video
        id={data.poetsJson.video}
      />
      <WorksList worksList={data.poetsJson[intl.locale].works_list} />
      <Link to="/">Go back to the homepage</Link>
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