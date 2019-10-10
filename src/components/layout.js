import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import GlobalStyle from "./styled/GlobalStyles";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, location }) => {
  const [togglerState, setTogglerState] = useState(false);
  const toggler = togglerState ? "header open" : "header";
  const togglerContent = togglerState ? "Close" : "Menu";
  const headerClass =
    location.pathname === "/" ? "home-header" : "static-header";

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header
        headerClass={headerClass}
        toggler={toggler}
        siteTitle={data.site.siteMetadata.title}
      />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
      <MobileToggler onClick={() => setTogglerState(!togglerState)}>
        {togglerContent}
      </MobileToggler>
    </>
  );
};

export default Layout;

const MobileToggler = styled.button`
  padding: 9px 25px;
  color: #edf0f1;
  text-decoration: none;
  background-color: var(--loco-green);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-size: 1rem;
  font-weight: 400;

  position: absolute;
  top: 2%;
  right: 2%;
  z-index: 1000;

  &:hover {
    background-color: var(--pro-green);
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;
