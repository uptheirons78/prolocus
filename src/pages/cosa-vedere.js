import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";

const Monumenti = ({ location }) => {
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
    <Layout location={location}>
      <h1>Cosa Vedere</h1>
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
              <Link to={`/cosa-vedere/${slug}`}>
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
