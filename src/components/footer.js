import React from "react";
import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <div className="footer-brand">
        <p>
          © {currentYear} Proloco Nepi. Sviluppo Web:{" "}
          <span>
            <a href="https://www.maurobono.com">Mauro Bono</a>
          </span>
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #333;
  color: var(--white);
  margin: 0 auto;
  padding: 3vh 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .footer-brand {
    border-top: 1px solid ${props => props.theme.meta};
    padding: 2vh 1rem;
  }

  p {
    color: ${props => props.theme.meta};
    font-size: 1rem;
  }

  a,
  a:active,
  a:focus {
    color: ${props => props.theme.green};
    border-bottom: 1px solid green;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
