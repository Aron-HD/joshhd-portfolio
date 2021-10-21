import React from 'react'
// import { Text } from 'theme-ui'
import styled from '@emotion/styled'

import Navigation from './Navigation'
import ThemeSwitch from './ThemeSwitcher'

const StyledHeader = styled.header`
  display: -webkit-flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  width: 100vw;
  .left,
  .right {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center; // IE10
    -webkit-align-items: center; // Safari / iOS
    align-items: center;
  }
  .left {
    -webkit-box-pack: flex-start;
    -moz-box-pack: flex-start;
    -ms-flex-pack: flex-start; // IE10
    -webkit-justify-content: flex-start; // Safari / iOS
    justify-content: flex-start;
    flex: 1;
  }
  .right {
    text-align: right;
    -webkit-box-pack: flex-end;
    -moz-box-pack: flex-end;
    -ms-flex-pack: flex-end; // IE10
    -webkit-justify-content: flex-end; // Safari / iOS
    justify-content: flex-end;
    flex: 1;
  }
`

const Header = () => (
  <StyledHeader>
    <div className="left">
      <ThemeSwitch />
    </div>
    <div className="right">
      {/* <NavBurger /> */}
      <Navigation />
    </div>
  </StyledHeader>
)

export default Header
