import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSlider from "../components/HeroSlider";
import Info from "../components/Info";
import Eventi from "../components/Eventi";
import Mosaic from "../components/Mosaic";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <HeroSlider />
      <Info />
      <Eventi />
      <Mosaic />
    </Layout>
  );
};

export default IndexPage;
