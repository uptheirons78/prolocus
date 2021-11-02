import React from "react";
import Container from "../components/styled/Container";
import Video from "./Video";
import { SectionTitle } from "../components/styled/Typography";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";

const Info = () => {
  const videoUrl = `https://www.youtube.com/embed/78yv888XQcQ`;
  return (
    <section className="informazioni" style={{ overflow: "hidden" }}>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            config={{ delay: 350, duration: 2500 }}
            to={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            {props => (
              <InfoContainer style={{ ...props }}>
                <div className="content left-content">
                  <SectionTitle>Pro Loco Nepi</SectionTitle>
                  <p>
                    Nepi sorge ai piedi dei monti Cimini e Sabatini su un
                    promontorio tufaceo protetto naturalmente da due profondi
                    canaloni lentamente scavati dal Rio Puzzolo e dal Rio
                    Falisco, affluenti del fiume Treia. Ha origini antichissime.
                    Fondata da Termo Larte 548 anni prima di Roma fece parte
                    della Pentapoli Etrusca e come tale fu popolosa e potente.
                  </p>
                  <p>
                    I Romani vi innalzarono ville e templari; vi costruirono
                    l’anfiteatro detto di Augusto e le importanti Terme dei
                    Gracchi. Distrutta dai Longobardi di Alboino, risorse nel
                    tardo Medioevo e divenne importante sotto il governo di
                    nobili famiglie: i Colonna, gli Orsini, gli Anguillara, lo
                    Stato Pontificio e, dal 1521 in poi, i Borgia.
                  </p>
                  <p>
                    Posti suggestivi e spesso ancora selvaggi, caratterizzano
                    fortemente il paesaggio di questi luoghi.
                  </p>
                </div>
                <div className="content right-content">
                  <Video src={videoUrl} />
                </div>
              </InfoContainer>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </section>
  );
};

export default Info;

const InfoContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  .content {
    padding: 0.7rem;
    text-align: justify;

    p {
      margin: 1rem 0;
      color: ${props => props.theme.lightBlack};
    }
  }

  .right-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
