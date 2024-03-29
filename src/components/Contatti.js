import React from "react";
import Container from "./styled/Container";
import { SectionSubTitle, SectionTitle } from "./styled/Typography";
import { FiPhoneCall, FiClock, FiMap } from "react-icons/fi";
import bgImg from "../images/contatti/contatti.jpg";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";

const Contatti = () => {
  return (
    <SectionContatti id="contact">
      <div className="inner-wrapper">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              config={{ delay: 350, duration: 2500 }}
              to={{ opacity: isVisible ? 1 : 0 }}
            >
              {({ opacity }) => (
                <Container style={{ opacity }}>
                  <ContattiTitle>Come Contattarci</ContattiTitle>
                  <ContattiSubTitle>
                    Gli uffici della Proloco Nepi sono aperti tutti i giorni.
                    Per contattarci potete chiamarci telefonicamente o
                    semplicemente inviare una email. Faremo in modo di metterci
                    in contatto e soddisfare le vostre richieste.
                  </ContattiSubTitle>
                  <div className="contacts-container">
                    <div className="contact-card">
                      <h4>
                        Indirizzo{" "}
                        <span>
                          <FiMap />
                        </span>
                      </h4>
                      <p>Via Giacomo Matteotti n. 32</p>
                      <p>01036 Nepi VT</p>
                    </div>
                    <div className="contact-card">
                      <h4>
                        Orario{" "}
                        <span>
                          <FiClock />
                        </span>
                      </h4>
                      <p>Lunedì - Sabato: 17:00 - 19:00</p>
                      <p>Domenica: 10:30 - 12:30</p>
                    </div>
                    <div className="contact-card">
                      <h4>
                        Contatti{" "}
                        <span>
                          <FiPhoneCall />
                        </span>
                      </h4>
                      <p>+39 0761 1707105</p>
                      <p>proloco_nepi@virgilio.it</p>
                    </div>
                  </div>
                </Container>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </SectionContatti>
  );
};

export default Contatti;

const ContattiTitle = styled(SectionTitle)`
  color: ${props => props.theme.green};
`;
const ContattiSubTitle = styled(SectionSubTitle)`
  color: #fff;
`;

const SectionContatti = styled.section`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  .inner-wrapper {
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    padding: 3vh 0;
  }

  .contacts-container {
    display: grid;
    grid-template-columns: ${props => props.theme.gtc270};
    grid-gap: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;

    .contact-card {
      padding: 4rem 1rem;

      h4 {
        font-size: 1.4rem;
        color: ${props => props.theme.green};
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 2rem;

        svg {
          transform: translate(20%, 10%);
        }
      }

      p {
        color: #fff;
      }
    }
  }
`;
