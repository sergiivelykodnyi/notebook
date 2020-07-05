import React from "react"
import {Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Title from "../components/title"
import SEO from "../components/seo"

function IndexPage({data}) {
  return (
    <Layout>
      <SEO title="Wiki" />
      <Title>Table of Content</Title>
      <table>
        <thead>
          <th>Title</th>
          <th>Description</th>
        </thead>
        <tbody>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <tr key={node.id}>
              <th source="col">
                <Link to={node.fields.slug}>
                  {node.frontmatter.title}{" "}
                </Link>
              </th>
              <td>{node.frontmatter.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
