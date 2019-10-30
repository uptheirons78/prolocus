import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import thumbnailImg from "../images/pages/cosa-vedere.jpg";
import { HeroTitle, HeroSubTitle } from "../components/styled/Typography";
import SEO from "../components/seo";
import Hero from "../components/styled/Hero";
import PageContainer from "../components/styled/PageContainer";
import Fade from "../components/Fade";
import SlideIn from "../components/SlideIn";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";

const heroStyle = {
  backgroundImage: `url(${thumbnailImg})`,
};

const NotFoundPage = ({ location }) => {
  const subtitle = `L’Associazione Pro Loco Nepi nasce con l'obiettivo di offrire ai residenti ed ai visitatori servizi ed informazioni sul patrimonio storico-culturale, artistico, paesaggistico ed enogastronomico di Nepi, organizzando, allo stesso tempo, una serie di eventi durante tutto l'anno per la promozione e la valorizzazione delle eccellenze locali e del nostro amato territorio.`;

  return (
    <Layout location={location} style={{ overflow: "hidden" }}>
      <SEO title="404" description={subtitle} />
      <Hero style={heroStyle}>
        <div className="content">
          <Fade>
            <FourOfFourTitle>404</FourOfFourTitle>
            <FourOfFourSubTitle>
              Oooops! Qualcosa non ha funzionato correttamente!
            </FourOfFourSubTitle>
          </Fade>
        </div>
      </Hero>
      <SlideIn>
        <PageContainer>
          <FourOfFourContent>
            <h4>
              <span>
                <FaQuoteLeft />
              </span>{" "}
              Chissà cosa avrebbe scoperto Colombo, se l'America non gli avesse
              sbarrato la strada.
              <span>
                <FaQuoteRight />
              </span>
            </h4>
            <h6>Jonathan Swift</h6>
            <p>
              Molto probabilmente la pagina che stai cercando non esiste o è
              stata rimossa dal sito.
            </p>
            <p>
              Al momento non sappiamo come aiutarti, però potresti sempre
              provare a contattarci. Siamo sempre disponibili e non vediamo
              l'ora di sentirti.
            </p>
            <p>
              Ecco alcuni indirizzi utili all'interno del nostro sito nel caso,
              come Cristoforo Colombo, ti sentissi perso{" "}
              <span role="img" aria-label="Smile">
                😁
              </span>
            </p>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/chi-siamo">Chi Siamo</Link>
              </li>
              <li>
                <Link to="/contatti">Contatti</Link>
              </li>
            </ul>
            <p className="nepi-quote">
              Un caro saluto dalla Proloco Nepi e ricorda sempre:{" "}
              <span>
                "Se New York avesse le siepi, sarebbe soltanto una piccola Nepi
                !"{" "}
              </span>
            </p>
          </FourOfFourContent>
        </PageContainer>
      </SlideIn>
    </Layout>
  );
};
export default NotFoundPage;
const FourOfFourTitle = styled(HeroTitle)`
  font-size: 5rem;

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;
const FourOfFourSubTitle = styled(HeroSubTitle)`
  font-size: 1.6rem;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;
const FourOfFourContent = styled.div`
  text-align: center;
  h4 {
    font-size: 2rem;
    color: ${props => props.theme.green};
    text-transform: uppercase;

    span {
      margin: 0 1rem;
    }

    svg {
      width: 2rem;
      height: 2rem;
      transform: translate(20%, 15%);
    }
  }

  h6 {
    font-size: 1.5rem;
    color: ${props => props.theme.darkGreen};
    text-align: center;
    margin: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }

  .nepi-quote {
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-top: 3rem;
    span {
      color: ${props => props.theme.green};
      font-weight: 700;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;

    li {
      padding: 0.2rem 0.7rem;
      border-radius: 5px;
      background: ${props => props.theme.green};
      transition: all 0.35s ease;
      transform: translateZ(0);
      backface-visibility: hidden;

      &:hover {
        transform: scale(1.2) rotate(10deg);
      }

      a {
        color: #fff;
        font-size: 1.2rem;
        text-transform: uppercase;
      }
    }
  }
`;
