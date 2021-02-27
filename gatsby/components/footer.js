import React from "react"
import PropTypes from "prop-types"
// import styled from "styled-components"

function Footer({ author, ...rest }) {
  return (
    <footer {...rest}>
      <small>&copy; {new Date().getFullYear()} {author}</small>
      <br />
      <small>Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">Gatsby</a></small>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer
