import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import eventiImg from "../images/pages/eventi.jpg";
import { SectionTitle, SectionSubTitle } from "../components/styled/Typography";
import ArticlesContainer from "../components/styled/ArticlesContainer";
import CardEvento from "../components/CardEvento";
import styled from "styled-components";

const Eventi = ({ location }) => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulEventi(sort: { fields: data, order: DESC }) {
        edges {
          node {
            id
            slug
            titolo
            data(formatString: "DD MMM YYYY", locale: "it")
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

  const eventi = contentfulData.allContentfulEventi.edges;

  return (
    <Layout location={location}>
      <Hero>
        <div className="content">
          <Title>Eventi e Manifestazioni</Title>
          <SubTitle>
            Ogni anno, spesso in collaborazione con altre associazioni locali,
            organizziamo diversi eventi e manifestazioni sia culturali che
            enogastronomiche. La Sagra del Salame Cotto e del Pecorino Romano in
            maggio, le Festività in onore dei Santi Tolomeo e Romano in agosto e
            la Sagra della Cipolla Nepesina sono soltanto alcune delle
            manifestazioni che vengono realizzate sul nostro territorio.
          </SubTitle>
        </div>
      </Hero>
      <PageContainer>
        <ArticlesContainer>
          {eventi.map(evento => (
            <CardEvento key={evento.node.id} data={evento.node} />
          ))}
        </ArticlesContainer>
      </PageContainer>
    </Layout>
  );
};

export default Eventi;

const Hero = styled.section`
  background-image: url(${eventiImg});
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
    background-color: rgba(0, 0, 0, 0.5);
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
