import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import GlobalStyle from "./styled/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";

import Header from "./header";
import FooterMenu from "./FooterMenu";
import Footer from "./footer";

const theme = {
  green: "#28a745",
  darkGreen: "#096432",
  black: "#393939",
  meta: "#a7a7a7",
  white: "#edf0f1",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

const Layout = ({ children }) => {
  const [togglerState, setTogglerState] = useState(false);
  const toggler = togglerState ? "header open" : "header";
  const togglerContent = togglerState ? "Close" : "Menu";

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
      <ThemeProvider theme={theme}>
        <Header toggler={toggler} siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
        <FooterMenu />
        <Footer />
        <MobileToggler onClick={() => setTogglerState(!togglerState)}>
          {togglerContent}
        </MobileToggler>
      </ThemeProvider>
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
