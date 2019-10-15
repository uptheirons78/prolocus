import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import convenzioniImg from "../images/pages/convenzioni.jpg";
import { SectionTitle, SectionSubTitle } from "../components/styled/Typography";
import CardConvenzioni from "../components/CardConvenzioni";
import styled from "styled-components";
import ArticlesContainer from "../components/styled/ArticlesContainer";

const Convenzioni = ({ location }) => {
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
            immagine {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  const convenzioni = contentfulData.allContentfulConvenzioni.edges;

  return (
    <Layout location={location}>
      <Hero>
        <div className="content">
          <Title>Convenzioni per i nostri soci</Title>
          <SubTitle>
            La Pro Loco di Nepi si e’ prefissata il compito di rendere visibili
            le realtà commerciali e le eccellenze locali per cercare sempre di
            più di interagire gli uni con altri per il bene comune. Abbiamo
            chiesto a negozi ed esercizi commerciali di effettuare delle
            convenzioni per i nostri Tesserati e siamo felici di elencarli e di
            sapere che altri si stanno organizzando in merito.
          </SubTitle>
        </div>
      </Hero>
      <PageContainer>
        <ArticlesContainer>
          {convenzioni
            .sort(() => Math.random() - 0.5)
            .map(convenzione => (
              <CardConvenzioni
                key={convenzione.node.id}
                data={convenzione.node}
              />
            ))}
        </ArticlesContainer>
      </PageContainer>
    </Layout>
  );
};

export default Convenzioni;

const Hero = styled.section`
  background-image: url(${convenzioniImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 50vh;
  position: relative;
  z-index: -1;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled(SectionTitle)`
  color: var(--primary-color-lighter);
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
const SubTitle = styled(SectionSubTitle)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  color: var(--white);
  padding: 1rem 2rem;
`;

const PageContainer = styled.section`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -70px;
  margin-bottom: 10vh;
  padding: 5vh 5rem 15vh 5rem;
  background-color: #fff;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.4),
    0px 3px 20px 8px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 600px) {
    padding: 2vh 3rem 10vh 3rem;
  }

  @media screen and (max-width: 800px) {
    margin-top: -30px;
  }
`;
