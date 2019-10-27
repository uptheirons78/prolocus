import React from "react";
import Layout from "../components/layout";
import thumbnailImg from "../images/nepi/nepi-cavatera.jpg";
import PageContainer from "../components/styled/PageContainer";
import Hero from "../components/styled/Hero";
import {
  SectionTitle,
  HeroTitle,
  HeroSubTitle,
} from "../components/styled/Typography";
import SEO from "../components/seo";
import Fade from "../components/Fade";
import SlideIn from "../components/SlideIn";
import styled from "styled-components";

const heroStyle = {
  backgroundImage: `url(${thumbnailImg})`,
};

const consiglieri = [
  { titolo: "Presidente", nome: "Fabio Pifferi" },
  { titolo: "Vice Presidente", nome: "Massimo Palazzini" },
  { titolo: "Segretario", nome: "Claudio de Giorgi" },
  { titolo: "Tesoriere", nome: "Annarosa Fabrizi" },
  { titolo: "Responsabile Magazzino", nome: "Luigi Albertini" },
  { titolo: "Consigliere", nome: "Mario Turbesi" },
  { titolo: "Consigliere", nome: "Maurizio Fagioli" },
  { titolo: "Consigliere", nome: "Aurelio Neri" },
  { titolo: "Consigliere", nome: "Antonio Tronca" },
  { titolo: "Consigliere", nome: "Francesco Marini" },
  { titolo: "Consigliere", nome: "Esmeralda Lucentini" },
  { titolo: "Consigliere", nome: "Mara Pomi" },
  { titolo: "Consigliere", nome: "Roberta Barboni" },
];

const ChiSiamo = ({ location }) => {
  const subtitle = `L’Associazione Pro Loco Nepi nasce con l'obiettivo di offrire ai residenti ed ai visitatori servizi ed informazioni sul patrimonio storico-culturale, artistico, paesaggistico ed enogastronomico di Nepi, organizzando, allo stesso tempo, una serie di eventi durante tutto l'anno per la promozione e la valorizzazione delle eccellenze locali e del nostro amato territorio.`;

  return (
    <Layout location={location}>
      <SEO title="Chi Siamo" description={subtitle} />
      <Hero style={heroStyle}>
        <div className="content">
          <Fade>
            <HeroTitle>Chi Siamo</HeroTitle>
            <HeroSubTitle>{subtitle}</HeroSubTitle>
          </Fade>
        </div>
      </Hero>
      <SlideIn>
        <PageContainer>
          <TitleWrapper>
            <TitoloOrganigramma>Consiglio Direttivo</TitoloOrganigramma>
          </TitleWrapper>
          <div className="bottom-line"></div>
          {consiglieri.map((consigliere, index) => {
            return (
              <TeamMember key={`${index}-${consigliere.nome}`}>
                <h6>{consigliere.titolo}</h6>
                <p>{consigliere.nome}</p>
              </TeamMember>
            );
          })}
        </PageContainer>
      </SlideIn>
    </Layout>
  );
};

export default ChiSiamo;

const TitoloOrganigramma = styled(SectionTitle)`
  color: ${props => props.theme.green};
  font-size: 1.8rem;
`;

const TitleWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.green};
  width: 50%;
  padding: 1.5rem;
  margin: 1rem auto;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const TeamMember = styled.article`
  padding: 1rem 3rem;
  text-align: center;

  h6 {
    font-size: 1.6rem;
    color: ${props => props.theme.green};
  }

  p {
    font-size: 1.3rem;
    color: ${props => props.theme.meta};
  }
`;
