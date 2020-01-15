import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { ReactSVG } from "react-svg"

import HamburgerIcon from "../images/hamburger.svg"

const HeaderStyles = styled.header`
  min-width: 100%;
  color: #fff;
  background: transparent;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  position: absolute;
  z-index: 100;
  vertical-align: middle;
`
const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <h4>Restaurant Name</h4>
    <img src={HamburgerIcon}></img>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
