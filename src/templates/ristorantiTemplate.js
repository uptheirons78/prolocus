import React from "react";
import { graphql } from "gatsby";
import bgImg from "../images/template/dove-mangiare.jpg";
import defaultImg from "../images/template/default/dove-mangiare.jpg";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {
  PostHero,
  Title,
  PostContainer,
  PostFigure,
} from "../components/SinglePost";
import SlideInFromLeft from "../components/SlideInFromLeft";
import Fade from "../components/Fade";
import SocialShare from "../components/SocialShare";

export const query = graphql`
  query($slug: String!) {
    contentfulRistoranti(slug: { eq: $slug }) {
      nome
      slug
      indirizzo
      orario
      telefono
      descrizione {
        descrizione
        childMarkdownRemark {
          html
        }
      }
      immagine {
        fluid {
          src
        }
      }
    }
  }
`;

const heroStyle = {
  backgroundImage: `url(${bgImg})`,
};

const Ristorante = ({ data }) => {
  /**
   * Variables
   */
  const {
    nome,
    indirizzo,
    orario,
    telefono,
    descrizione,
    immagine,
    slug,
  } = data.contentfulRistoranti;

  /**
   * Image: Default or Contentful one
   */
  const img = immagine !== null ? immagine.fluid.src : defaultImg;

  /**
   * Description for SEO
   */
  const description = descrizione.descrizione.slice(0, 120);

  return (
    <Layout>
      <SEO title={nome} description={description} />
      <PostHero style={heroStyle} className="post-hero">
        <div className="post-hero__content content">
          <SlideInFromLeft>
            <Title className="post-hero__title">{nome}</Title>
          </SlideInFromLeft>
        </div>
      </PostHero>
      <PostContainer className="post-container">
        <Fade>
          <PostFigure className="post-figure">
            <img
              className="post-figure__thumbnail thumbnail-image"
              src={img}
              alt={nome}
            />
            <figcaption className="post-figure__figcaption">
              <span>
                <strong>Telefono</strong>: {telefono}
              </span>
            </figcaption>
          </PostFigure>
          <div className="info-restaurant">
            <p>
              <span>
                <strong>Indirizzo</strong>
              </span>
              : {indirizzo}
            </p>
            <p>
              <span>
                <strong>Orario</strong>
              </span>
              : {orario}
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: descrizione.childMarkdownRemark.html,
            }}
          ></div>
          <SocialShare
            socialConfig={{
              config: {
                title: { nome },
                url: `https://proloconepi.netlify.com/dove-mangiare/${slug}`,
              },
            }}
          />
        </Fade>
      </PostContainer>
    </Layout>
  );
};

export default Ristorante;
