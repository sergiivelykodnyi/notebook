import React from "react"
import styled from "styled-components"

import { rhythm } from '../utils/typography';

const Container = styled.h1`
  margin-top: 0;
  margin-bottom: ${rhythm(2)};
`

function Title({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export default Title
