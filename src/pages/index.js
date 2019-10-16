import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSlider from "../components/HeroSlider";
import Info from "../components/Info";
import Eventi from "../components/Eventi";
import Mosaic from "../components/Mosaic";
import Contatti from "../components/Contatti";
import Mappa from "../components/Mappa";

const coordinate = [
  {
    nome: "sede",
    lat: 42.242075,
    lng: 12.347944,
  },
];

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <HeroSlider />
      <Info />
      <Eventi />
      <Mosaic />
      <Contatti />
      <Mappa coordinate={coordinate} />
    </Layout>
  );
};

export default IndexPage;
