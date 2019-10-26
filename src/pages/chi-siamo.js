import React from "react";
import Layout from "../components/layout";
import chiSiamoImg from "../images/nepi/nepi-cavatera.jpg";
import { SectionTitle, SectionSubTitle } from "../components/styled/Typography";
import SEO from "../components/seo";
import Fade from "../components/Fade";
import SlideIn from "../components/SlideIn";
import styled from "styled-components";

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
      <Hero>
        <div className="content">
          <Fade>
            <Title>Chi Siamo</Title>
            <SubTitle>{subtitle}</SubTitle>
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

const Hero = styled.section`
  background-image: url(${chiSiamoImg});
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
  /* color: var(--primary-color-lighter); */
  color: ${props => props.theme.green};
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const TitoloOrganigramma = styled(SectionTitle)`
  color: var(--primary-color-lighter);
  font-size: 1.8rem;
`;

const TitleWrapper = styled.div`
  border-bottom: 1px solid var(--primary-color-lighter);
  width: 50%;
  padding: 1.5rem;
  margin: 1rem auto;

  @media screen and (max-width: 800px) {
    width: 100%;
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

  @media screen and (max-width: 800px) {
    margin-top: -30px;
  }
`;

const TeamMember = styled.article`
  padding: 1rem 3rem;
  text-align: center;

  h6 {
    font-size: 1.6rem;
    color: var(--primary-color-lighter);
  }

  p {
    font-size: 1.3rem;
    color: var(--meta-color);
  }
`;
