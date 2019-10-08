import React from "react";
import Container from "./styled/Container";
import styled from "styled-components";
import Video from "./Video";

const Info = () => {
  const videoUrl = `https://www.youtube.com/embed/XyPNSkb8Hsg`;
  return (
    <section className="informazioni">
      <Container>
        <DoubleGrid className="double-grid">
          <div className="left">
            <h4>Pro Loco Nepi</h4>
            <p>
              Nepi sorge ai piedi dei monti Cimini e Sabatini su un promontorio
              tufaceo protetto naturalmente da due profondi canaloni lentamente
              scavati dal Rio Puzzolo e dal Rio Falisco, affluenti del fiume
              Treia. Ha origini antichissime. Fondata da Termo Larte 548 anni
              prima di Roma fece parte della Pentapoli Etrusca e come tale fu
              popolosa e potente.
            </p>
            <p>
              I Romani vi innalzarono ville e templari; vi costruirono
              l’anfiteatro detto di Augusto e le importanti Terme dei Gracchi.
              Distrutta dai Longobardi di Alboino, risorse nel tardo Medioevo e
              divenne importante sotto il governo di nobili famiglie: i Colonna,
              gli Orsini, gli Anguillara, lo Stato Pontificio e, dal 1521 in
              poi, i Borgia.
            </p>
            <p>
              Posti suggestivi e spesso ancora selvaggi, caratterizzano
              fortemente il paesaggio di questi luoghi.
            </p>
          </div>
          <div className="right">
            <Video src={videoUrl} />
          </div>
        </DoubleGrid>
      </Container>
    </section>
  );
};

export default Info;

const DoubleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 4rem;

  .left {
    h4 {
      color: var(--primary-color);
      text-transform: uppercase;
    }
    p {
      text-align: justify;
      color: var(--paragraph-color);
      margin: 1rem 0;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
