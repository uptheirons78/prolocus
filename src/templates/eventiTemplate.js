import React from "react";
import { graphql } from "gatsby";
import bgImg from "../images/pages/eventi.jpg";
import defaultImg from "../images/default.jpg";
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
    contentfulEventi(slug: { eq: $slug }) {
      titolo
      slug
      data(formatString: "DD MMM YYYY", locale: "it")
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

const Evento = props => {
  /**
   * Variables
   */
  const {
    titolo,
    data,
    descrizione,
    immagine,
    slug,
  } = props.data.contentfulEventi;

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
          <SlideInFromLeft>
            <Title className="post-hero__title">{titolo}</Title>
          </SlideInFromLeft>
        </div>
      </PostHero>
      <PostContainer className="post-container">
        <Fade>
          <PostFigure className="post-figure">
            <img
              className="post-figure__thumbnail thumbnail-image"
              src={img}
              alt={titolo}
            />
            <figcaption className="post-figure__figcaption">
              <span>
                <strong>Data</strong>: {data}
              </span>
            </figcaption>
          </PostFigure>
          <div
            dangerouslySetInnerHTML={{
              __html: descrizione.childMarkdownRemark.html,
            }}
          ></div>
          <SocialShare
            socialConfig={{
              config: {
                title: { titolo },
                url: `https://proloconepi.netlify.com/eventi/${slug}`,
              },
            }}
          />
        </Fade>
      </PostContainer>
    </Layout>
  );
};

export default Evento;
