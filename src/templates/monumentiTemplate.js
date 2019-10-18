import React from "react";
import { graphql } from "gatsby";
import bgImg from "../images/hero/monumenti-template.jpg";
import defaultImg from "../images/default.jpg";
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
    contentfulMonumenti(slug: { eq: $slug }) {
      titolo
      indirizzo
      orari
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

const Monumento = props => {
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
    titolo,
    indirizzo,
    orari,
    descrizione,
    immagine,
  } = props.data.contentfulMonumenti;

  /**
   * Image: Default or Contentful one
   */
  const img = immagine !== null ? immagine.fluid.src : defaultImg;

  /**
   * Description for SEO
   */
  const description = descrizione.descrizione.slice(0, 120);

  /**
   * JSX
   */
  return (
    <Layout>
      <SEO title={titolo} description={description} />
      <PostHero style={heroStyle} className="post-hero">
        <div className="post-hero__content content">
          <animated.div style={slideIn}>
            <Title className="post-hero__title">{titolo}</Title>
          </animated.div>
        </div>
      </PostHero>
      <PostContainer className="post-container">
        <animated.div style={fade}>
          <PostFigure className="post-figure">
            <img
              className="post-figure__thumbnail thumbnail-image"
              src={img}
              alt={titolo}
            />
            <figcaption className="post-figure__figcaption">
              <span>
                <strong>Indirizzo</strong>: {indirizzo}
              </span>
              <span>
                <strong>Orario</strong>: {orari}
              </span>
            </figcaption>
          </PostFigure>
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

export default Monumento;
