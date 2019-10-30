import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../images/logo/website-icon.png";

const FooterMenu = () => {
  return (
    <MainContainer>
      <div className="footer-menu__container">
        <div className="footer-menu__item footer-menu__left">
          <h4>Proloco Nepi</h4>
          <div className="footer-menu__logo">
            <img src={logo} alt="Pro Loco Nepi" />
          </div>
          <p>Tel: 0761 1707105</p>
        </div>
        <div className="footer-menu__item footer-menu__center">
          <h4>Menu</h4>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/eventi">Eventi</Link>
              </li>
              <li>
                <Link to="/cosa-vedere">Cosa Vedere</Link>
              </li>
              <li>
                <Link to="/dove-mangiare">Dove Mangiare</Link>
              </li>
              <li>
                <Link to="/dove-dormire">Dove Dormire</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-menu__item footer-menu__right">
          <h4>Info</h4>
          <nav>
            <ul>
              <li>
                <Link to="/chi-siamo">Chi Siamo</Link>
              </li>
              <li>
                <Link to="/contatti">Contatti</Link>
              </li>
              <li>
                <Link to="/convenzioni">Convenzioni</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies-policy">Cookies Policy</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </MainContainer>
  );
};

export default FooterMenu;

const MainContainer = styled.section`
  background-color: #333;

  .footer-menu__container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 2vh 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    .footer-menu__item {
      text-align: center;
      padding: 2vh 1rem;

      .footer-menu__logo {
        width: 40%;
        margin: 0 auto;
        margin-bottom: 1rem;
        img {
          width: 100%;
        }
      }

      p {
        color: ${props => props.theme.white};
      }

      h4 {
        font-size: 1.2rem;
        font-weight: 700;
        color: ${props => props.theme.green};
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 1rem;
        border-bottom: 1px solid ${props => props.theme.green};
        display: inline-block;

        @media screen and (max-width: 700px) {
          letter-spacing: 1px;
        }
      }

      nav {
        ul {
          li {
            padding: 0.5rem 0;
            @media screen and (max-width: 700px) {
              padding: 0.3rem 0;
            }

            a,
            a:active,
            a:focus {
              color: ${props => props.theme.white};
              transition: all 0.35s ease;

              &:hover {
                color: ${props => props.theme.green};
                letter-spacing: 1px;
              }
            }
          }
        }
      }
    }
  }
`;
