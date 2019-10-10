import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";

const Ristoranti = ({ location }) => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulRistoranti {
        edges {
          node {
            id
            slug
            nome
            indirizzo
            orario
            descrizione {
              descrizione
            }
          }
        }
      }
    }
  `);

  const ristoranti = contentfulData.allContentfulRistoranti.edges;

  return (
    <Layout location={location}>
      <h1>Ristoranti</h1>
      <ol className="ristoranti">
        {ristoranti.map(ristorante => {
          const {
            id,
            slug,
            nome,
            orario,
            indirizzo,
            descrizione,
          } = ristorante.node;
          return (
            <li key={id} className="ristorante">
              <Link to={`/ristoranti/${slug}`}>
                <h2>{nome}</h2>
              </Link>
              <p>
                {indirizzo} <span>{orario}</span>
              </p>
              <p>{descrizione.descrizione}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default Ristoranti;
