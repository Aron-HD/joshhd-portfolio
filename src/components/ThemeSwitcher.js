import React from 'react'
import { useColorMode, Button } from 'theme-ui'

const ThemeSwitch = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      onClick={(e) => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}
    >
      {colorMode === 'default' ? 'Dark' : 'Light'}
    </Button>
  )
}

export default ThemeSwitch
