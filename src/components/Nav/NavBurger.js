/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'
import { bool, func } from 'prop-types'

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: transparent;
  border: none;
  justify-content: space-around;
  z-index: 1;

  span {
    display: block;
    margin: 2px;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    opacity: 0.9;
    transform-origin: 5px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const NavBurger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      sx={{ span: { bg: 'primary' } }}
      open={open}
      onClick={() => setOpen(!open)}
      role="navigation"
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

NavBurger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default NavBurger
