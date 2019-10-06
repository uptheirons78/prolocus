import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    contentfulMonumenti(slug: { eq: $slug }) {
      titolo
      indirizzo
      orari
      descrizione {
        descrizione
      }
    }
  }
`;

const Monumento = props => {
  const {
    titolo,
    indirizzo,
    orari,
    descrizione,
  } = props.data.contentfulMonumenti;

  return (
    <Layout>
      <h1>{titolo}</h1>
      <p>
        {indirizzo} - <span>{orari}</span>
      </p>
      <p>{descrizione.descrizione}</p>
    </Layout>
  );
};

export default Monumento;
