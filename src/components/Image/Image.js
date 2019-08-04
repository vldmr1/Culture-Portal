import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function renderImage(file) {
    return <Img fixed={file.node.childImageSharp.fixed} alt={file.node.name} />;
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

      render={({ images }) => {
        if (images.edges.length) {
          return renderImage(images.edges.find(image => {
              return image.node.relativePath === props.src;
          }))
        }

        return null;
      }}
    />
  )
}

export default Image;