import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Portfolio = () => (
  <Layout>
    <SEO title="History" keywords={[`pavel`, `history`, `react`]}/>
    <section className="container">
      <h1>Portfolio</h1>
      <p>
        I have a lot of different projects done from the start of my developer carrier. Some of them
        I'll put on this page. On Frontend side I use React + TypeScript. On backend NodeJS. I have
        experience with Angular, PHP, jQuery, Backbone, but now I prefer to avoid work with them.
      </p>
    </section>
  </Layout>
);

export default Portfolio;
