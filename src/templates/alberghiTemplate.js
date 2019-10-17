import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    contentfulAlberghi(slug: { eq: $slug }) {
      nome
      indirizzo
      descrizione {
        descrizione
      }
    }
  }
`;

const Albergo = ({ data }) => {
  const { nome, indirizzo, descrizione } = data.contentfulAlberghi;

  return (
    <Layout>
      <h1>{nome}</h1>
      <p>{indirizzo}</p>
      <p>{descrizione.descrizione}</p>
    </Layout>
  );
};

export default Albergo;
