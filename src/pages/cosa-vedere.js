import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import thumbnailImg from "../images/hero/monumenti-template.jpg";
import { SectionTitle, SectionSubTitle } from "../components/styled/Typography";
import ArticlesContainer from "../components/styled/ArticlesContainer";
import CardMonumento from "../components/CardMonumento";
import styled from "styled-components";

const Monumenti = ({ location }) => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulMonumenti(sort: { fields: titolo, order: ASC }) {
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

  const monumenti = contentfulData.allContentfulMonumenti.edges;

  return (
    <Layout location={location}>
      <Hero>
        <div className="content">
          <Title>Cosa Vedere</Title>
          <SubTitle>
            La Città di Nepi è uno dei borghi più importanti dal punto di vista
            storico e turistico della Tuscia. Il patrimonio artistico ed
            architettonico è ricco e diversi sono i luoghi di interesse che
            potrete visitare. Il paesaggio circostante fornisce luoghi
            incantevoli da scoprire e dove poter passare una giornata all'aria
            aperta.
          </SubTitle>
        </div>
      </Hero>
      <PageContainer>
        <ArticlesContainer>
          {monumenti.map(monumento => (
            <CardMonumento key={monumento.node.id} data={monumento.node} />
          ))}
        </ArticlesContainer>
      </PageContainer>
    </Layout>
  );
};

export default Monumenti;

const Hero = styled.section`
  background-image: url(${thumbnailImg});
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
`;
