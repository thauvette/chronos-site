import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
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
        <Link to="/">
          <div className="image-container">
            <Img sizes={data.headerImage.childImageSharp.sizes} />
          </div>
        </Link>
        <div className="u-flex header-text-links">
          <Link to="/">Music</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/contact">Contact</Link>
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
