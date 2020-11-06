import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout pageTitle="What is this blog about ?">
    <SEO
      title="About"
      keywords={["Maxime Bonin", "dev", "developer", "programmer", "linux", "open source", "technology"]}
    />
    <p>
      This website is all about me playing with technology and communicating
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
