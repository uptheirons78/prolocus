import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = ({ siteTitle, toggler, headerClass }) => {
  const pages = [
    { name: "Eventi", path: "/eventi" },
    { name: "Cosa Vedere", path: "/cosa-vedere" },
    { name: "Dove Mangiare", path: "/dove-mangiare" },
    { name: "Dove Dormire", path: "/dove-mangiare" },
    { name: "Convenzioni", path: "/convenzioni" },
  ];

  return (
    <StyledHeader className={`${toggler} ${headerClass}`}>
      <Link to="/" className="logo">
        <h1>
          PROLOCO <span>NEPI</span>
        </h1>
      </Link>
      <nav>
        <ul className="nav-links">
          {pages.map(page => (
            <li key={page.name}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <a className="cta" href="/">
        <button>Contatti</button>
      </a>
    </StyledHeader>
  );
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.2rem 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &.static-header {
    position: static;
    background-color: rgba(0, 0, 0, 1);

    @media screen and (max-width: 900px) {
      position: absolute;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 100;
    left: -100%;
    transition: all 0.35s ease 0.25s;
  }

  &.header.open {
    left: 0;
  }

  @media screen and (max-width: 1200px) {
    padding: 1.2rem 2%;
  }

  .logo {
    margin-right: auto;

    @media screen and (max-width: 900px) {
      margin: 0 auto;
    }
  }

  h1 {
    font-size: 1.4rem;
    color: var(--pro-green);

    span {
      color: var(--loco-green);
    }
  }

  li,
  a,
  button {
    color: #edf0f1;
    text-decoration: none;
  }

  .nav-links {
    list-style: none;
    margin-right: 1rem;

    @media screen and (max-width: 900px) {
      margin-right: 0;
    }

    li {
      display: inline-block;
      padding: 0px 1rem;

      @media screen and (max-width: 900px) {
        display: block;
        text-align: center;
        margin: 1rem;
      }

      @media screen and (max-width: 1000px) {
        padding: 0px 0.6rem;
      }

      a {
        transition: all 0.3s ease 0s;

        @media screen and (max-width: 900px) {
          font-size: 1.2rem;
        }
      }

      a:hover {
        color: var(--loco-green);
      }
    }
  }

  button {
    padding: 9px 25px;
    background-color: var(--loco-green);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-size: 1rem;
  }

  button:hover {
    background-color: var(--pro-green);
  }
`;
