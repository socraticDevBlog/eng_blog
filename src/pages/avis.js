import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AvisPage = () => (
  <Layout pageTitle="Avis">
    <Seo title="Avis" keywords={["Maxime Bonin", "avis", "disclaimer"]}  />
    <p>Les idées et opinions exprimées sur ce blogue sont exclusivement les miennes. Elles ne réflètent pas nécessairement celles de mes employeurs et clients.</p>
  </Layout>
)

export default AvisPage
