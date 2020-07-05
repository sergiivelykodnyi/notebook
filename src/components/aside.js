import React from "react"
// import styled from "styled-components"

function ASide({children, ...rest}) {
  return (
    <aside {...rest}>
      {children}
    </aside>
  )
}

export default ASide
