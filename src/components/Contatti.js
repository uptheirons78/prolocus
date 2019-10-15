import React from "react";
import Container from "./styled/Container";
import { SectionSubTitle, SectionTitle } from "./styled/Typography";
import styled from "styled-components";
import { FiPhoneCall, FiClock, FiMap } from "react-icons/fi";
import bgImg from "../images/bg-contatti.jpg";

const Contatti = () => {
  return (
    <SectionContatti>
      <Container>
        <ContattiTitle>Come Contattarci</ContattiTitle>
        <ContattiSubTitle>
          Gli uffici della Proloco Nepi sono aperti tutti i giorni. Per
          contattarci potete chiamarci telefonicamente o semplicemente inviare
          una email. Faremo in modo di metterci in contatto e soddisfare le
          vostre richieste.
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
    </SectionContatti>
  );
};

export default Contatti;

const ContattiTitle = styled(SectionTitle)`
  color: #fff;
`;
const ContattiSubTitle = styled(SectionSubTitle)`
  color: #d5d5d5;
`;

const SectionContatti = styled.section`
  /* background-color: var(--primary-color); */
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 3vh 0;

  .contacts-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-gap: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;

    .contact-card {
      padding: 4rem 1rem;
      box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.4),
        0px 3px 20px 8px rgba(0, 0, 0, 0.2);
      background-color: rgba(0, 0, 0, 0.4);

      h4 {
        font-size: 1.4rem;
        color: var(--primary-color-lighter);
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 2rem;

        svg {
          transform: translate(20%, 10%);
        }
      }

      p {
        color: var(--white);
      }
    }
  }
`;
