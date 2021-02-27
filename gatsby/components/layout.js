/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"

import Header from "./header"
// import ASide from "./aside"
import Footer from "./footer"
import Title from "./title"
import TiltLink from "./title-link"

import { rhythm } from '../utils/typography';

const Container = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;

  @media(min-width: 1280px) {
    display: grid;
    grid-template-columns: 2rem 18rem 2rem minmax(2rem,7fr) 38rem minmax(2rem,7fr);
  }
`

const Col = styled.div`
  @media(max-width: 1279px) {
    max-width: 38rem;
    margin-left: auto;
    margin-right: auto;
    padding-left 1rem;
    padding-right 1rem;
  }
`

const ColSide = styled(Col)`
  padding-top: ${rhythm(1)};
  padding-bottom: ${rhythm(1)};
  
  @media(min-width: 768px) {
    padding-top: ${rhythm(2)};
  }

  @media(min-width: 1280px) {
    display: grid;
    grid-column: 2;
    padding-bottom: ${rhythm(2)};
  }
`

const ColMain = styled(Col)`
  padding-top: ${rhythm(1)};
  padding-bottom: ${rhythm(1)};

  @media(min-width: 768px) {
    padding-top: ${rhythm(2)};
    padding-bottom: ${rhythm(2)};
  }

  @media(min-width: 1280px) {
    grid-column: 5;
  }
`

const ColSideHeader = styled(Header)`
  @media(min-width: 1280px) {
    align-self: start;
  }
`

const ColSideFooter = styled(Footer)`
  display: none;

  @media(min-width: 1280px) {
    display: block;
    align-self: end;
  }
`

const ColMainFooter = styled(Footer)`
  display: block;

  @media(min-width: 1280px) {
    display: none;
  }
`

const HeaderTitle = styled(Title)`
  margin-bottom: 0;
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <Container>
      <ColSide>
        <ColSideHeader>
          <HeaderTitle>
            <TiltLink to="/">{data.site.siteMetadata.title}</TiltLink>
          </HeaderTitle>
        </ColSideHeader>
        <ColSideFooter author={data.site.siteMetadata.author} />
      </ColSide>
      <ColMain>
        <main>{children}</main>
        <ColMainFooter author={data.site.siteMetadata.author} />
      </ColMain>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
