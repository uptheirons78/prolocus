import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSlider from "../components/HeroSlider";
import Info from "../components/Info";
import Eventi from "../components/Eventi";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <HeroSlider />
      <Info />
      <Eventi />
    </Layout>
  );
};

export default IndexPage;
