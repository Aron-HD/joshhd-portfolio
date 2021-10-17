import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledNav = styled.nav`
  ul {
    display: inline-block;
    list-style: none;
    padding-inline-start: 0;
    li {
      display: inherit;
      padding: 0 5px;
    }
  }
`

const Navigation = () => (
  <StyledNav role="navigation" aria-label="Main">
    <ul>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about/" activeClassName="active">
          About
        </Link>
      </li>
    </ul>
  </StyledNav>
)

export default Navigation
