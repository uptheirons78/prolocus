import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header>
    <div>Header</div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
