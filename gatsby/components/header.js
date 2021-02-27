import React from "react"

function Header({ children, ...rest }) {
  return (
    <header {...rest}>
      {children}
    </header>
  )
}

export default Header
