import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="Maxime Bonin">
    <SEO
      title="About"
      keywords={["Dailyprog", "Maxime Bonin", "dev", "developer", "programmer"]}
    />
    <p>
      SocraticDev is{" "}
      <a
        href="https://en.maximebonin.dev"
        rel="noopener noreferrer"
        target="_blank"
        alt="link to Maxime Bonin's homepage"
      >
        Maxime Bonin{" "}
      </a>{" "}
      's nickname on online community{" "}
      <a
        href="https://dailyprog.org"
        rel="noopener noreferrer"
        target="_blank"
        alt="link to Dailyprog's website"
      >
        Dailyprog
      </a>
      .{" "}
    </p>
    <p>
      This webiste is all about me playing with technology and communicating
      this passion.
    </p>
    <p>
      I'm trying to publish a new post on a weekly basis. While I'm giving
      freedom to address any subject matter, I mostly talk about tech and
      philosophy.
    </p>
  </Layout>
)

export default AboutPage
