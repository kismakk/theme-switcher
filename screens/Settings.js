import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import { useTheme } from '../hooks/useTheme'
import ThemeSwitchButton from '../components/ThemeSwitchButton'

const Settings = () => {
  const { isDarkMode } = useTheme()

  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <ThemeSwitchButton />
    </View>
  )
}

export default Settings