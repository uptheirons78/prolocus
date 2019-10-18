import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import thumbnailImg from "../images/hero/monumenti-template.jpg";
import defaultImg from "../images/default.jpg";
import { SectionTitle } from "../components/styled/Typography";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

export const query = graphql`
  query($slug: String!) {
    contentfulMonumenti(slug: { eq: $slug }) {
      titolo
      indirizzo
      orari
      descrizione {
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
   * JSX
   */
  return (
    <Layout>
      <Hero>
        <div className="content">
          <animated.div style={slideIn}>
            <Title>{titolo}</Title>
          </animated.div>
        </div>
      </Hero>
      <PostContainer>
        <animated.div style={fade}>
          <PostFigure className="post-figure">
            <img className="thumbnail-image" src={img} alt={titolo} />
            <figcaption>
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

const Hero = styled.section`
  background-image: url(${thumbnailImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 40vh;
  position: relative;
  z-index: -1;

  @media screen and (max-width: 500px) {
    min-height: 30vh;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled(SectionTitle)`
  color: var(--primary-color-lighter);

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const PostFigure = styled.figure`
  margin: 0 auto 3vh auto;
  max-width: 700px;
  width: 100%;
  height: 420px;
  position: relative;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.8),
    0px 3px 20px 8px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 900px) {
    height: 300px;
  }

  .thumbnail-image {
    max-width: 100%;
    width: 100%;
    height: 100%;
  }

  figcaption {
    padding: 0.5rem 1.5rem;
    position: absolute;
    bottom: 0.2rem;
    left: -10px;
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #fff;
    background: rgba(40, 167, 69, 0.7);

    &:before {
      content: "";
      position: absolute;
      top: -10px;
      left: 0;
      border-bottom: 10px solid var(--primary-color);
      border-left: 10px solid transparent;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 10px solid rgba(0, 0, 0, 0.1);
      border-left: 10px solid transparent;
    }

    span {
      margin: 0.3rem;

      strong {
        color: #fff;
      }
    }
  }
`;

const PostContainer = styled.section`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -70px;
  margin-bottom: 10vh;
  padding: 5vh 5rem 15vh 5rem;
  background-color: #fff;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.4),
    0px 3px 20px 8px rgba(0, 0, 0, 0.2);
  text-align: justify;

  @media screen and (max-width: 900px) {
    padding: 2vh 1rem 10vh 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 1rem 3rem;
    color: var(--primary-color-lighter);
    line-height: 0.8;
  }

  h1 {
    font-size: 2.4rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
    padding: 1rem 3rem;
  }

  ol {
    font-size: 1rem;
    padding: 0 6rem 0 6rem;
  }

  ul {
    font-size: 1rem;
    padding: 0 5rem 0 5rem;
  }

  li {
    padding: 0.3rem 0;
  }

  a,
  a:visited {
    color: var(--primary-color-lighter);
    font-weight: 700;
    transition: all 0.35s ease-in-out;
  }

  a:hover {
    color: var(--primary-color);
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }

  strong {
    color: var(--primary-color-lighter);
    font-weight: 700;
  }
`;
