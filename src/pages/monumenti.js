import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";

const Monumenti = () => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulMonumenti {
        edges {
          node {
            id
            slug
            titolo
            indirizzo
            orari
            descrizione {
              descrizione
            }
          }
        }
      }
    }
  `);

  const monumenti = contentfulData.allContentfulMonumenti.edges;

  return (
    <Layout>
      <h1>Monumenti</h1>
      <ol className="eventi">
        {monumenti.map(monumento => {
          const {
            id,
            slug,
            titolo,
            orari,
            indirizzo,
            descrizione,
          } = monumento.node;
          return (
            <li key={id} className="monumento">
              <Link to={`/monumenti/${slug}`}>
                <h2>{titolo}</h2>
              </Link>
              <p>
                {indirizzo} <span>{orari}</span>
              </p>
              <p>{descrizione.descrizione}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default Monumenti;
