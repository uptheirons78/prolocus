import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import CardEvento from "./CardEvento";
import { SectionTitle, SectionSubTitle } from "./styled/Typography";
import Container from "./styled/Container";
import ArticlesContainer from "./styled/ArticlesContainer";
import { FaLongArrowAltRight } from "react-icons/fa";
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
      <Container className="container">
        <SectionTitle>Eventi</SectionTitle>
        <SectionSubTitle>
          Le Festività Patronali in onore dei S.S. Romano e Tolomeo, la Sagra
          del Pecorino Romano e del Salame Cotto, il Natale dei Bambini e la
          Sagra della Cipolla Nepesina sono soltanto alcuni esempi delle diverse
          manifestazioni culturali ed enogastronomiche che vengono organizzate
          annualmente sul nostro territorio.
        </SectionSubTitle>
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
    </SectionEventi>
  );
};

export default Eventi;

const SectionEventi = styled.section`
  width: 100%;
  background: #fbfbfb;
  padding: 3vh 0;

  .more {
    display: block;
    text-align: center;
    font-size: 1.3rem;
    margin-top: 6vh;
    padding: 1rem 3rem;
    color: var(--primary-color-lighter);
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
