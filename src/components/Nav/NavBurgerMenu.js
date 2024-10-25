/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import { Link } from 'gatsby'
import { bool } from 'prop-types'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

const NavMenu = ({ open }) => {
    const { contentfulPerson } = useStaticQuery(graphql`
        query portfolioAndCVQuery {
            contentfulPerson(contentful_id: {eq: "6Fr0UwYXtgWexoF4sAVdJ5"}) {
                cv {
                    file {
                        url
                        fileName
                    }
                }
                portfolio {
                    file {
                        url
                        fileName
                    }
                }
            }
        }
    `)
    const portfolio = contentfulPerson.portfolio.file
    const cv = contentfulPerson.cv.file
    return (
        <StyledMenu open={open}>
            <ul
                sx={{
                    'li:hover': {
                        bg: 'primary',
                        a: { color: 'text' },
                    },
                    a: { color: 'primary' },
                }}
            >
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
                    <a className="menu" title={portfolio.fileName} href={portfolio.url} target="_blank" rel="noreferrer">
                        <Text variant="heading">Portfolio</Text>
                    </a>
                </li>
                <li>
                    <a className="menu" title={cv.fileName} href={cv.url} target="_blank" rel="noreferrer">
                        <Text variant="heading">cv</Text>
                    </a>
                </li>
            </ul>
        </StyledMenu>
    )
}

NavMenu.propTypes = {
    open: bool.isRequired,
}

export default NavMenu

/* STYLES */

const StyledMenu = styled.nav`
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  text-align: right;
  padding: 3rem 0;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.2s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  ul {
    padding: 0;
    list-style-type: none;
    li {
      cursor: pointer;
      padding: 10px 2rem 10px 1rem;
      margin: 5px 0;
      /* opacity: 0.7; */
      /* transition: opacity 1s ease; */
      text-align: right;
      a.menu {
        display: inline-block;
        text-decoration: none;
        width: 100%;
      }
      &:hover {
        /* opacity: 1; */
        text-align: left;
        transition: text-align 0.6s;
        a.menu {
          /* opacity: 1; */
          margin-right: 8rem;
          transition: margin-right 0.5s;
        }
      }
    }
  }
`
