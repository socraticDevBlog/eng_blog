import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const DisclaimerPage = () => (
  <Layout pageTitle="Disclaimer">
    <SEO title="Disclaimer" keywords={["Maxime Bonin", "disclaimer"]}  />
    <p>Ideas and opinions discussed on this blog are mine. They do not necessary reflect those of my employers and clients.</p>
  </Layout>
)

export default DisclaimerPage
