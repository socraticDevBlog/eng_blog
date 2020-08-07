import React from "react";
import {Link} from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout pageTitle="404 not found">
    <SEO title="404: Not found" />
    <p>The page you are looking for doesn't exist or has moved</p>
    <Link to={'/'} className="btn btn-success text-uppercase">Back to home</Link>
  </Layout>
)

export default NotFoundPage
