import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./albums.scss"
const Albums = () => {
  const data = useStaticQuery(graphql`
    query {
      boots: file(relativePath: { eq: "boots-the-cat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whatItIs: file(relativePath: { eq: "what-it-is.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="albums ">
      <a
        href="https://store.chronosmusic.ca/album/what-it-is"
        target="_blank"
        rel="noopener noreferrer"
        className="album"
      >
        <div className="album-cover">
          <Img fluid={data.whatItIs.childImageSharp.fluid} />
        </div>
        <div className="album-details">
          <p>
            What It Is <small>(2017)</small>
          </p>
        </div>
      </a>
      <a
        href="https://store.chronosmusic.ca/album/boots-the-cat"
        target="_blank"
        rel="noopener noreferrer"
        className="album"
      >
        <div className="album-cover">
          <Img fluid={data.boots.childImageSharp.fluid} />
        </div>
        <div className="album-details">
          <p>
            Boots the Cat <small>(2013)</small>
          </p>
        </div>
      </a>
    </div>
  )
}

export default Albums
