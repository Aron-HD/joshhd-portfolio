import React from 'react'
import { Text } from 'theme-ui'
import { Link } from 'gatsby'
import { bool } from 'prop-types'
import styled from '@emotion/styled'

const StyledMenu = styled.nav`
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  text-align: right;
  padding: 3rem 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;

  /* Spacing for menu items */
  ul {
    padding: 0;
    list-style-type: none;
    li {
      padding: 10px 0;
      transition-delay: 2s;
      a.menu {
        text-decoration: none;
        color: #00ffaa;
        opacity: 0.9;
        transition: 200ms;
      }
      a.menu:hover {
        opacity: 0.2;
      }
    }
  }
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
`

const NavMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <Link className="menu" to="/">
            <Text variant="heading">Home</Text>
          </Link>
        </li>
        <li>
          <Link className="menu" to="/about">
            <Text variant="heading">About</Text>
          </Link>
        </li>
        <li>
          <Link className="menu" to="../../../static/portfolio.pdf">
            <Text variant="heading">Portfolio</Text>
          </Link>
        </li>
        <li>
          <Link className="menu" to="../../../static/cv.pdf">
            <Text variant="heading">c.v</Text>
          </Link>
        </li>
      </ul>
    </StyledMenu>
  )
}

NavMenu.propTypes = {
  open: bool.isRequired,
}

export default NavMenu
