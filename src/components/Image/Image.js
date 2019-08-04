import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function renderImage(file) {
  file.node.childImageSharp.fixed.width = 500*file.node.childImageSharp.fixed.width/file.node.childImageSharp.fixed.height;
  file.node.childImageSharp.fixed.height = 500;
    return file ? <Img fixed={file.node.childImageSharp.fixed} alt={file.node.name}/> : null;
}

const Image = function(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                name
                extension
                relativePath
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      `}

      render={({ images }) =>
          renderImage(images.edges.find(image => {
            return image.node.relativePath === props.src;
        }))
      }
    />
  )
}

export default Image;