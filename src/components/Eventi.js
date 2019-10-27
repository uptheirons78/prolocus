import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import CardEvento from "./CardEvento";
import { SectionTitle, EventiSectionSubTitle } from "./styled/Typography";
import Container from "./styled/Container";
import ArticlesContainer from "./styled/ArticlesContainer";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";

const Eventi = () => {
  const contentfulEventiData = useStaticQuery(graphql`
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

  const eventi = contentfulEventiData.allContentfulEventi.edges.slice(0, 3);

  return (
    <SectionEventi className="eventi">
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            config={{ delay: 350, duration: 2500 }}
            to={{ opacity: isVisible ? 1 : 0 }}
          >
            {({ opacity }) => (
              <Container className="container" style={{ opacity }}>
                <SectionTitle>Eventi</SectionTitle>
                <EventiSectionSubTitle>
                  Le Festività Patronali in onore dei S.S. Romano e Tolomeo, la
                  Sagra del Pecorino Romano e del Salame Cotto, il Natale dei
                  Bambini e la Sagra della Cipolla Nepesina sono soltanto alcuni
                  esempi delle diverse manifestazioni culturali ed
                  enogastronomiche che vengono organizzate annualmente sul
                  nostro territorio.
                </EventiSectionSubTitle>
                <ArticlesContainer>
                  {eventi.map(evento => (
                    <CardEvento key={evento.node.id} data={evento.node} />
                  ))}
                </ArticlesContainer>
                <Link className="more" to="/eventi">
                  <span>Vedi tutti i prossimi eventi </span>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                </Link>
              </Container>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </SectionEventi>
  );
};

export default Eventi;

const SectionEventi = styled.section`
  width: 100%;
  background: ${props => props.theme.grey};
  padding: 3vh 0;

  .more {
    display: block;
    text-align: center;
    font-size: 1.3rem;
    margin-top: 6vh;
    padding: 1rem 3rem;
    color: ${props => props.theme.green};
    font-weight: 400;
    transition: all 0.35s ease;

    &:hover {
      letter-spacing: 1px;
    }

    svg {
      transform: translate(20%, 15%);
    }
  }
`;
