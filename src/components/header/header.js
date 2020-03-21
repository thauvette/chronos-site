import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./header.scss"
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          sizes(maxWidth: 300) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <header>
      <div className="max-content-container header-inner">
        <div className="image-container">
          <Img sizes={data.headerImage.childImageSharp.sizes} />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
