import React from 'react'
import { useColorMode, Button } from 'theme-ui'

const ThemeSwitch = (_props) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      onClick={(_e) => {
        const mode = colorMode === 'default' || colorMode === 'dark' ? 'light' : 'dark'
        setColorMode(mode)
        localStorage.setItem('theme', mode)
        console.debug(mode)
      }}
    >
      {colorMode !== 'light' ? 'Light' : 'Dark'}
    </Button>
  )
}

export default ThemeSwitch
