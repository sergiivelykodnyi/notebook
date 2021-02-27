import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled(Link)`
  color: currentColor;
  text-decoration: none;
`

function TitleLink({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export default TitleLink
