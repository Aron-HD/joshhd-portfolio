import React from 'react'
import { Text } from 'theme-ui'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`

const Footer = () => (
  <StyledFooter>
    <Text as="p" variant="small">
      ©{new Date().getFullYear()} | Joshua Hayes Davidson
    </Text>
  </StyledFooter>
)

export default Footer
