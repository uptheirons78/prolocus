import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import thumbnailImg from "../images/pages/cosa-vedere.jpg";
import PageContainer from "../components/styled/PageContainer";
import Hero from "../components/styled/Hero";
import { HeroTitle, HeroSubTitle } from "../components/styled/Typography";
import ArticlesContainer from "../components/styled/ArticlesContainer";
import CardMonumento from "../components/CardMonumento";
import SEO from "../components/seo";
import Fade from "../components/Fade";
import SlideIn from "../components/SlideIn";

const heroStyle = {
  backgroundImage: `url(${thumbnailImg})`,
};

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

  const subtitle = `La Città di Nepi è uno dei borghi più importanti dal punto di vista
            storico e turistico della Tuscia. Il patrimonio artistico ed
            architettonico è ricco e diversi sono i luoghi di interesse che
            potrete visitare. Il paesaggio circostante fornisce luoghi
            incantevoli da scoprire e dove poter passare una giornata all'aria
            aperta.`;

  return (
    <Layout location={location}>
      <SEO title="Cosa Vedere a Nepi" description={subtitle} />
      <Hero style={heroStyle}>
        <div className="content">
          <Fade>
            <HeroTitle>Cosa Vedere</HeroTitle>
            <HeroSubTitle>{subtitle}</HeroSubTitle>
          </Fade>
        </div>
      </Hero>
      <SlideIn>
        <PageContainer>
          <ArticlesContainer>
            {monumenti.map(monumento => (
              <CardMonumento key={monumento.node.id} data={monumento.node} />
            ))}
          </ArticlesContainer>
        </PageContainer>
      </SlideIn>
    </Layout>
  );
};

export default Monumenti;
