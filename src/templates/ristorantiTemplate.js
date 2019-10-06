import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    contentfulRistoranti(slug: { eq: $slug }) {
      nome
      indirizzo
      orario
      descrizione {
        descrizione
      }
    }
  }
`;

const Ristorante = ({ data }) => {
  const { nome, indirizzo, orario, descrizione } = data.contentfulRistoranti;

  return (
    <Layout>
      <h1>{nome}</h1>
      <p>
        {indirizzo} - <span>{orario}</span>
      </p>
      <p>{descrizione.descrizione}</p>
    </Layout>
  );
};

export default Ristorante;
