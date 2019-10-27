import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import thumbnailImg from "../images/pages/eventi.jpg";
import { HeroTitle, HeroSubTitle } from "../components/styled/Typography";
import ArticlesContainer from "../components/styled/ArticlesContainer";
import CardEvento from "../components/CardEvento";
import SEO from "../components/seo";
import Hero from "../components/styled/Hero";
import PageContainer from "../components/styled/PageContainer";
import Fade from "../components/Fade";
import SlideIn from "../components/SlideIn";

const heroStyle = {
  backgroundImage: `url(${thumbnailImg})`,
};

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

  const subtitle = `Ogni anno, spesso in collaborazione con altre associazioni locali,
            organizziamo diversi eventi e manifestazioni sia culturali che
            enogastronomiche. La Sagra del Salame Cotto e del Pecorino Romano in
            maggio, le Festività in onore dei Santi Tolomeo e Romano in agosto e
            la Sagra della Cipolla Nepesina sono soltanto alcune delle
            manifestazioni che vengono realizzate sul nostro territorio.`;

  return (
    <Layout location={location} style={{ overflow: "hidden" }}>
      <SEO title="Eventi e Manifestazioni a Nepi" description={subtitle} />
      <Hero style={heroStyle}>
        <div className="content">
          <Fade>
            <HeroTitle>Eventi e Manifestazioni</HeroTitle>
            <HeroSubTitle>{subtitle}</HeroSubTitle>
          </Fade>
        </div>
      </Hero>
      <SlideIn>
        <PageContainer>
          <ArticlesContainer>
            {eventi.map(evento => (
              <CardEvento key={evento.node.id} data={evento.node} />
            ))}
          </ArticlesContainer>
        </PageContainer>
      </SlideIn>
    </Layout>
  );
};

export default Eventi;
