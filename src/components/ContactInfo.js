import React from 'react'
import styled from '@emotion/styled'

const StyledUl = styled.ul`
  list-style: none;
  font-size: x-small;
  padding-inline-start: 0;
  li {
    a {
      text-decoration: underline;
    }
  }
`

const ContactInfo = () => {
  return (
    <StyledUl>
      <li>
        <a
          target="_blank"
          href="https://www.rca.ac.uk/students/joshua-hayes-davidson/"
          rel="noreferrer noopener"
        >
          Joshua Hayes Davidson
        </a>
      </li>
      <li>Visual Communication 2017</li>
      <li>
        <a
          target="_blank"
          href="https://twitter.com/4KJoshua"
          rel="noreferrer noopener"
        >
          @4KJoshua
        </a>
      </li>
    </StyledUl>
  )
}

export default ContactInfo
