import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import CardEvento from "../components/CardEvento";
import { SectionTitle, SectionSubTitle } from "../components/styled/Typography";
import Container from "../components/styled/Container";
import ArticlesContainer from "../components/styled/ArticlesContainer";

const IndexPage = () => {
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
    <Layout>
      <SEO title="Home" />
      <section className="eventi">
        <Container className="container">
          <SectionTitle>Eventi e Manifestazioni</SectionTitle>
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
      </section>
    </Layout>
  );
};

export default IndexPage;
