import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import CardEvento from "./CardEvento";
import { SectionTitle, SectionSubTitle } from "./styled/Typography";
import Container from "./styled/Container";
import ArticlesContainer from "./styled/ArticlesContainer";
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error
          reprehenderit adipisci.
        </SectionSubTitle>
        <ArticlesContainer>
          {eventi.map(evento => (
            <CardEvento key={evento.node.id} data={evento.node} />
          ))}
        </ArticlesContainer>
      </Container>
    </SectionEventi>
  );
};

export default Eventi;

const SectionEventi = styled.section`
  width: 100%;
  background: #fbfbfb;
  padding: 3vh 0;
`;
