import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    contentfulEventi(slug: { eq: $slug }) {
      titolo
      data(formatString: "DD MM YYYY")
      descrizione {
        descrizione
      }
    }
  }
`;

const Evento = props => {
  const { titolo, data, descrizione } = props.data.contentfulEventi;

  return (
    <Layout>
      <h1>{titolo}</h1>
      <p>{data}</p>
      <p>{descrizione.descrizione}</p>
    </Layout>
  );
};

export default Evento;
