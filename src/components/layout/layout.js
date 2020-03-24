import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import "./layout.scss"

const Layout = ({ children, title }) => {
  return (
    <>
      <Header />
      <main>
        <div className="md-content-container">
          <h1 className="u-page-title">{title}</h1>
          {children}
        </div>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
