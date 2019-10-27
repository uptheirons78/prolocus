import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import thumbnailImg from "../images/hero/dove-dormire.jpg";
import PageContainer from "../components/styled/PageContainer";
import Hero from "../components/styled/Hero";
import { HeroTitle, HeroSubTitle } from "../components/styled/Typography";
import ArticlesContainer from "../components/styled/ArticlesContainer";
import CardAlbergo from "../components/CardAlbergo";
import SEO from "../components/seo";
import Fade from "../components/Fade";
import SlideIn from "../components/SlideIn";

const heroStyle = {
  backgroundImage: `url(${thumbnailImg})`,
};

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

  const subtitle = `Negli ultimi anni sono nate a Nepi nuove strutture di accoglienza
            per tutti i tipi di visitatore. L’offerta è ormai ampia ed adeguata.
            Molte delle strutture sono situate nei pressi del centro
            storico,quindi ideali come punto di partenza per le visite del
            nostro borgo. Altre sono immerse nel verde e permettono il massimo
            del relax e della tranquillità per alcuni giorni lontano dal caos
            cittadino.`;

  return (
    <Layout location={location}>
      <SEO title="Dove Dormire a Nepi" description={subtitle} />
      <Hero style={heroStyle}>
        <div className="content">
          <Fade>
            <HeroTitle>Dove Dormire</HeroTitle>
            <HeroSubTitle>{subtitle}</HeroSubTitle>
          </Fade>
        </div>
      </Hero>
      <SlideIn>
        <PageContainer>
          <ArticlesContainer>
            {alberghi
              .sort(() => Math.random() - 0.5)
              .map(albergo => (
                <CardAlbergo key={albergo.node.id} data={albergo.node} />
              ))}
          </ArticlesContainer>
        </PageContainer>
      </SlideIn>
    </Layout>
  );
};

export default Alberghi;
