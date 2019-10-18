import React from "react";
import { graphql } from "gatsby";
import bgImg from "../images/hero/dove-dormire.jpg";
import defaultImg from "../images/dove-dormire.jpg";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {
  PostHero,
  Title,
  PostContainer,
  PostFigure,
} from "../components/SinglePost";
import { useSpring, animated } from "react-spring";

export const query = graphql`
  query($slug: String!) {
    contentfulAlberghi(slug: { eq: $slug }) {
      nome
      indirizzo
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

const Albergo = ({ data }) => {
  /**
   * React Spring Animations
   */
  const slideIn = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
  });

  const fade = useSpring({
    config: { duration: 2500 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  /**
   * Variables
   */
  const {
    nome,
    indirizzo,
    telefono,
    descrizione,
    immagine,
  } = data.contentfulAlberghi;

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
          <animated.div style={slideIn}>
            <Title className="post-hero__title">{nome}</Title>
          </animated.div>
        </div>
      </PostHero>
      <PostContainer className="post-container">
        <animated.div style={fade}>
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
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: descrizione.childMarkdownRemark.html,
            }}
          ></div>
        </animated.div>
      </PostContainer>
    </Layout>
  );
};

export default Albergo;
