import React from 'react'
import { useTheme } from '../hooks/useTheme'
import { Switch } from 'react-native-paper'
import { Text } from 'react-native'

const ThemeSwitchButton = () => {
  const { isDarkMode, toggleDarkMode } = useTheme()
  return (
    <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
  )
}

export default ThemeSwitchButton

