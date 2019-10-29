import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import styled from "styled-components";

const SocialShare = ({ socialConfig }) => (
  <Share>
    <h4>Condividi:</h4>
    <ShareContainer>
      <FacebookShareButton
        url={socialConfig.config.url}
        className="button facebook"
      >
        <FacebookIcon size={32} />
      </FacebookShareButton>
      <LinkedinShareButton
        url={socialConfig.config.url}
        className="button linkedin"
      >
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        className="button twitter"
      >
        <TwitterIcon size={32} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={socialConfig.config.url}
        className="button whatsapp"
      >
        <WhatsappIcon size={32} />
      </WhatsappShareButton>
      <EmailShareButton url={socialConfig.config.url} className="button email">
        <EmailIcon size={32} />
      </EmailShareButton>
    </ShareContainer>
  </Share>
);

export default SocialShare;

const Share = styled.div`
  margin-top: 3rem;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
  h4 {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 500;

    @media screen and (max-width: 600px) {
      padding: 1rem 0;
    }
  }
`;

const ShareContainer = styled.div`
  display: flex;
  padding: 0 3rem;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
  .button {
    outline: none;
    margin-right: 0.5rem;
  }
  .social-icon--email {
    rect {
      fill: orangered;
    }
  }
`;
