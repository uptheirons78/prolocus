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

const seoDescription = `Nepi è un paese fantastico da vedere sia in estate che in inverno. Potrete ammirare gli incredibili colori della natura che lo circonda, le mura farnesiane, la Rocca dei Borgia o la bellezza della Cattedrale di Santa Maria Assunta. Durante il vostro soggiorno potrete gustare fantastici prodotti locali o prendere parte agli eventi culturali che si tengono durante tutto l'anno.`;

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" description={seoDescription} />
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
