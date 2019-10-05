import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";

const Eventi = () => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulEventi(sort: { fields: data, order: DESC }) {
        edges {
          node {
            id
            slug
            titolo
            data(formatString: "DD MM YYYY")
            descrizione {
              descrizione
            }
          }
        }
      }
    }
  `);

  const eventi = contentfulData.allContentfulEventi.edges;

  return (
    <Layout>
      <h1>Eventi</h1>
      <ol className="eventi">
        {eventi.map(evento => {
          const { titolo, id, slug, data, descrizione } = evento.node;
          return (
            <li key={id} className="evento">
              <Link to={`/eventi/${slug}`}>
                <h2>{titolo}</h2>
              </Link>
              <p>Data: {data}</p>
              <p>{descrizione.descrizione}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default Eventi;
