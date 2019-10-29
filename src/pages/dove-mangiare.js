import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import thumbnailImg from "../images/pages/dove-mangiare.jpg";
import PageContainer from "../components/styled/PageContainer";
import Hero from "../components/styled/Hero";
import { HeroTitle, HeroSubTitle } from "../components/styled/Typography";
import ArticlesContainer from "../components/styled/ArticlesContainer";
import CardRistorante from "../components/CardRistorante";
import SEO from "../components/seo";
import Fade from "../components/Fade";
import SlideIn from "../components/SlideIn";

const heroStyle = {
  backgroundImage: `url(${thumbnailImg})`,
};

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
      <Hero style={heroStyle}>
        <div className="content">
          <Fade>
            <HeroTitle>Dove Mangiare</HeroTitle>
            <HeroSubTitle>{subtitle}</HeroSubTitle>
          </Fade>
        </div>
      </Hero>
      <SlideIn>
        <PageContainer>
          <ArticlesContainer>
            {ristoranti
              .sort(() => Math.random() - 0.5)
              .map(ristorante => (
                <CardRistorante
                  key={ristorante.node.id}
                  data={ristorante.node}
                />
              ))}
          </ArticlesContainer>
        </PageContainer>
      </SlideIn>
    </Layout>
  );
};

export default Ristoranti;
