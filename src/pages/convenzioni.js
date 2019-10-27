import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import thumbnailImg from "../images/pages/convenzioni.jpg";
import PageContainer from "../components/styled/PageContainer";
import Hero from "../components/styled/Hero";
import { HeroTitle, HeroSubTitle } from "../components/styled/Typography";
import CardConvenzioni from "../components/CardConvenzioni";
import ArticlesContainer from "../components/styled/ArticlesContainer";
import SEO from "../components/seo";
import Fade from "../components/Fade";
import SlideIn from "../components/SlideIn";

const heroStyle = {
  backgroundImage: `url(${thumbnailImg})`,
};

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

  const subtitle = `La Pro Loco di Nepi si e’ prefissata il compito di rendere visibili
            le realtà commerciali e le eccellenze locali per cercare sempre di
            più di interagire gli uni con altri per il bene comune. Abbiamo
            chiesto a negozi ed esercizi commerciali di effettuare delle
            convenzioni per i nostri Tesserati e siamo felici di elencarli e di
            sapere che altri si stanno organizzando in merito.`;

  return (
    <Layout location={location}>
      <SEO title="Convenzioni" description={subtitle} />
      <Hero style={heroStyle}>
        <div className="content">
          <Fade>
            <HeroTitle>Convenzioni per i nostri soci</HeroTitle>
            <HeroSubTitle>{subtitle}</HeroSubTitle>
          </Fade>
        </div>
      </Hero>
      <SlideIn>
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
      </SlideIn>
    </Layout>
  );
};

export default Convenzioni;
