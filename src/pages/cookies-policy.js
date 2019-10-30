import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import thumbnailImg from "../images/pages/cosa-vedere.jpg";
import { HeroTitle } from "../components/styled/Typography";
import Hero from "../components/styled/Hero";
import PrivacyContainer from "../components/styled/PrivacyContainer";
import Fade from "../components/Fade";
import SlideIn from "../components/SlideIn";

const heroStyle = {
  backgroundImage: `url(${thumbnailImg})`,
};

const Cookies = ({ location }) => {
  const contentfulData = useStaticQuery(graphql`
    query {
      contentfulPrivacy(titolo: { eq: "Informativa" }) {
        id
        cookiesPolicy {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  const innerHtml =
    contentfulData.contentfulPrivacy.cookiesPolicy.childMarkdownRemark.html;

  return (
    <Layout location={location} style={{ overflow: "hidden" }}>
      <SEO title="Cookies Policy" />
      <Hero style={heroStyle}>
        <div className="content">
          <Fade>
            <HeroTitle>Cookies Policy</HeroTitle>
          </Fade>
        </div>
      </Hero>
      <SlideIn>
        <PrivacyContainer className="post-container">
          <div
            dangerouslySetInnerHTML={{
              __html: innerHtml,
            }}
          ></div>
        </PrivacyContainer>
      </SlideIn>
    </Layout>
  );
};

export default Cookies;
