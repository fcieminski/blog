import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const BlogPost = () => {
  const { site } = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 600) {
                src
              }
              original {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      Hello
      <div>Hello!</div>
    </div>
  )
}

export default BlogPost
