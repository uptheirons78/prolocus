import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";

const Convenzioni = () => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulConvenzioni {
        edges {
          node {
            id
            nome
            tipologia
            sconto
            indirizzo
            webPage
            descrizione {
              descrizione
            }
          }
        }
      }
    }
  `);

  const convenzioni = contentfulData.allContentfulConvenzioni.edges;

  return (
    <Layout>
      <h1>Convenzioni per i soci della Pro Loco Nepi</h1>
      <p>
        La Pro Loco di Nepi si e’ prefissata il compito di rendere visibili le
        realtà commerciali e le eccellenze locali per cercare sempre di più di
        interagire gli uni con altri per il bene comune. Abbiamo chiesto a
        negozi ed esercizi commerciali di effettuare delle convenzioni per i
        nostri Tesserati e siamo felici di elencarli e di sapere che altri si
        stanno organizzando in merito.
      </p>
      <ol className="convenzioni">
        {convenzioni.map(convenzione => {
          const {
            id,
            nome,
            tipologia,
            sconto,
            indirizzo,
            webPage,
            descrizione,
          } = convenzione.node;
          return (
            <li key={id} className="convenzione">
              <h4>{nome}</h4>
              <h6>{tipologia}</h6>
              <p>{sconto}</p>
              <p>{indirizzo}</p>
              <p>{descrizione.descrizione}</p>
              <a href={webPage}>Website</a>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default Convenzioni;
