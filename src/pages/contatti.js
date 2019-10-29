import React from "react";
import Layout from "../components/layout";
import thumbnailImg from "../images/pages/contatti.jpg";
import PageContainer from "../components/styled/PageContainer";
import Hero from "../components/styled/Hero";
import { HeroTitle, HeroSubTitle } from "../components/styled/Typography";
import MappaSede from "../components/MappaSede";
import SEO from "../components/seo";
import Fade from "../components/Fade";
import SlideIn from "../components/SlideIn";
import { FiPhoneCall, FiMail, FiMap } from "react-icons/fi";
import styled from "styled-components";

const heroStyle = {
  backgroundImage: `url(${thumbnailImg})`,
};

const coordinate = [
  {
    nome: "sede",
    lat: 42.242075,
    lng: 12.347944,
  },
];

const Contatti = ({ location }) => {
  const subtitle = `Gli uffici della Proloco Nepi sono situati in Via G. Matteotti n. 32 nel centro del paese e sono aperti ogni giorno dalle ore 17 alle ore 19 circa e la Domenica dalle ore 10:30 alle ore 12:30. Vi aspettiamo. Venite a trovarci.`;

  return (
    <Layout location={location}>
      <SEO title="Contatti" description={subtitle} />
      <Hero style={heroStyle}>
        <div className="content">
          <Fade>
            <HeroTitle>I Nostri Contatti</HeroTitle>
            <HeroSubTitle>{subtitle}</HeroSubTitle>
          </Fade>
        </div>
      </Hero>
      <SlideIn>
        <PageContainer>
          <Contattaci className="contattaci">
            <div className="inner-wrapper telefono">
              <h6 className="contattaci-title">
                Telefono
                <span>
                  <FiPhoneCall />
                </span>
              </h6>
              <p className="contattaci-par">+39 0761 1707105</p>
            </div>
            <div className="inner-wrapper email">
              <h6 className="contattaci-title">
                Email
                <span>
                  <FiMail />
                </span>
              </h6>
              <p className="contattaci-par">proloco_nepi@virgilio.it</p>
            </div>
          </Contattaci>
          <ContenitoreMappa>
            <h6>
              Dove Siamo
              <span>
                <FiMap />
              </span>
            </h6>
            <MappaSede coordinate={coordinate} />
          </ContenitoreMappa>
        </PageContainer>
      </SlideIn>
    </Layout>
  );
};

export default Contatti;

const Contattaci = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  margin: 5vh auto;
  padding: 2vh 0;

  .inner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.4),
      0px 3px 20px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.35s ease;
    overflow: hidden;
    background: #fff;

    &:hover {
      transform: scale(1.05);
    }

    .contattaci-title {
      font-size: 2rem;
      color: ${props => props.theme.green};
      text-transform: uppercase;

      svg {
        transform: translate(20%, 15%);
      }
    }

    .contattaci-par {
      font-size: 2rem;
      font-weight: 700;
      color: #333;
    }
  }
`;

const ContenitoreMappa = styled.section`
  box-shadow: ${props => props.theme.bsl};
  padding: 2rem 0;
  transition: all 0.35s ease;
  overflow: hidden;
  background: #fff;

  &:hover {
    transform: scale(1.05);
  }

  h6 {
    font-size: 2rem;
    color: ${props => props.theme.green};
    text-transform: uppercase;
    text-align: center;

    svg {
      transform: translate(20%, 15%);
    }
  }
`;
