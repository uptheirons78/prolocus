import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <div className="footer-brand">
        <p>
          © {currentYear} ProLoco Nepi. Sviluppo Web:{" "}
          <span>
            <a href="https://www.maurobono.com">Mauro Bono</a>
          </span>
        </p>
      </div>
      <div className="footer-navigation">
        <ul>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          {"|"}
          <li>
            <Link to="/">Cookies</Link>
          </li>
          {"|"}
          <li>
            <Link to="/">Accessibilità</Link>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  margin: 3vh auto;
  padding: 0 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: var(--meta-color);
    font-size: 1rem;
  }

  a,
  a:active,
  a:focus {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .footer-navigation {
    color: var(--meta-color);
    ul {
      display: flex;
    }

    li {
      margin: 2px 0.5rem;
    }

    a {
      display: inline-block;
      font-size: 1rem;
    }

    @media screen and (max-width: 900px) {
      margin-top: 1rem;
    }
  }
`;
