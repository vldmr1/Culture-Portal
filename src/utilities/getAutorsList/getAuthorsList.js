import { graphql, useStaticQuery } from "gatsby"

const getAuthorsList = () => {
  // if (lang === 'ru') {
  //   return useStaticQuery(graphql`
  //     query ruPoetsQuery {
  //       allPoetsJson {
  //         edges {
  //           node {
  //             id
  //           yearsOfLife
  //           photo
  //           video
  //           mapId
  //           ru {
  //             name
  //             location
  //             bio
  //             timeline {
  //               time
  //               title
  //               desc
  //             }
  //             works_list {
  //               group
  //               works {
  //                 name
  //                 date
  //               }
  //             }
  //           }
  //           gallery
  //         }
  //       }
  //     }
  //   }`).allPoetsJson.edges.map(e => e.node);
  // }

  // if (lang === "be") {
  //   return useStaticQuery(graphql`
  //     query bePoetsQuery {
  //       allPoetsJson {
  //         edges {
  //           node {
  //             id
  //             yearsOfLife
  //             photo
  //             video
  //             mapId
  //             be {
  //               name
  //               location
  //               bio
  //               timeline {
  //                 time
  //                 title
  //                 desc
  //               }
  //               works_list {
  //                 group
  //                 works {
  //                   name
  //                   date
  //                 }
  //               }
  //             }
  //           gallery
  //         }
  //       }
  //     }
  //   }`).allPoetsJson.edges.map(e => e.node);
  // }

  // if (lang === 'en') {
  //   return useStaticQuery(graphql`
  //     query enPoetsQuery {
  //       allPoetsJson {
  //         edges {
  //           node {
  //             id
  //           yearsOfLife
  //           photo
  //           video
  //           mapId
  //           en {
  //             name
  //             location
  //             bio
  //             timeline {
  //               time
  //               title
  //               desc
  //             }
  //             works_list {
  //               group
  //               works {
  //                 name
  //                 date
  //               }
  //             }
  //           }
  //           gallery
  //         }
  //       }
  //     }
  //   }`).allPoetsJson.edges.map(e => e.node);
  // }

  const data = useStaticQuery(graphql`
  query poetsQuery {
    allPoetsJson {
      edges {
        node {
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
  }
}`)

  return data.allPoetsJson.edges.map(e => e.node);
}

export default getAuthorsList;