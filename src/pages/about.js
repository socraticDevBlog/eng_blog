import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="Maxime Bonin">
    <SEO title="About" keywords={["Maxime Bonin", "dev", "developer", "programmer"]} />
    <p>
      <strong>SocraticDev</strong> started a career as a Philosophy teacher, but pivoted and became a software developer.</p>
    <p>As a consultant, he works on large scale information systems. Outside of work, he likes to watch Red Sox baseball while strumming his guitar</p>
    <p>Homepage : <a href="https://en.maximebonin.dev" rel="noopener noreferrer"  target="_blank" alt="url to home page">https://en.maximebonin.dev </a></p>
  </Layout>
)

export default AboutPage
