import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import thumbnailImg from "../images/hero/dove-dormire.jpg";
import { SectionTitle, SectionSubTitle } from "../components/styled/Typography";
import ArticlesContainer from "../components/styled/ArticlesContainer";
import CardAlbergo from "../components/CardAlbergo";
import styled from "styled-components";

const Alberghi = ({ location }) => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulAlberghi {
        edges {
          node {
            id
            slug
            nome
            indirizzo
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

  const alberghi = contentfulData.allContentfulAlberghi.edges;

  return (
    <Layout location={location}>
      <Hero>
        <div className="content">
          <Title>Dove Dormire</Title>
          <SubTitle>
            Negli ultimi anni sono nate a Nepi nuove strutture di accoglienza
            per tutti i tipi di visitatore. L’offerta è ormai ampia ed adeguata.
            Molte delle strutture sono situate nei pressi del centro
            storico,quindi ideali come punto di partenza per le visite del
            nostro borgo. Altre sono immerse nel verde e permettono il massimo
            del relax e della tranquillità per alcuni giorni lontano dal caos
            cittadino.
          </SubTitle>
        </div>
      </Hero>
      <PageContainer>
        <ArticlesContainer>
          {alberghi.map(albergo => (
            <CardAlbergo key={albergo.node.id} data={albergo.node} />
          ))}
        </ArticlesContainer>
      </PageContainer>
    </Layout>
  );
};

export default Alberghi;

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
