import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import thumbnailImg from "../images/hero/dove-mangiare.jpg";
import { SectionTitle, SectionSubTitle } from "../components/styled/Typography";
import ArticlesContainer from "../components/styled/ArticlesContainer";
import CardRistorante from "../components/CardRistorante";
import SEO from "../components/seo";
import styled from "styled-components";

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
            telefono
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

  const ristoranti = contentfulData.allContentfulRistoranti.edges;

  const subtitle = `Cucina casereccia, tipica nepesina, romana, regionale e nazionale.
            Menù di carne e di pesce. Nepi offre un sorprendente ventaglio di
            scelte gastronomiche, in grado di accontentare qualsiasi palato. Le
            varietà culinarie offerte ed il numero di ristoranti presenti sul
            territorio vi permetteranno di degustare ottimi piatti prodotti con
            eccellenze locali.`;

  return (
    <Layout location={location}>
      <SEO title="Dove Mangiare a Nepi" description={subtitle} />
      <Hero>
        <div className="content">
          <Title>Dove Mangiare</Title>
          <SubTitle>{subtitle}</SubTitle>
        </div>
      </Hero>
      <PageContainer>
        <ArticlesContainer>
          {ristoranti.map(ristorante => (
            <CardRistorante key={ristorante.node.id} data={ristorante.node} />
          ))}
        </ArticlesContainer>
      </PageContainer>
    </Layout>
  );
};

export default Ristoranti;

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
