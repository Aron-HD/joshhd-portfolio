import React, { useState } from 'react'
import styled from '@emotion/styled'
import ThemeSwitch from './ThemeSwitcher'
import NavBurger from './Nav/NavBurger'
import NavBurgerMenu from './Nav/NavBurgerMenu'

const StyledHeader = styled.header`
  display: -webkit-flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  z-index: 1;
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

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <StyledHeader>
      <div className="left">
        <ThemeSwitch />
      </div>
      <div className="right">
        <NavBurger open={open} setOpen={setOpen} />
        <NavBurgerMenu open={open} setOpen={setOpen} />
      </div>
    </StyledHeader>
  )
}

export default Header
