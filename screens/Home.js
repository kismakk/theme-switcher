import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Styles from '../Styles'
import { useTheme } from '../hooks/useTheme'

const Home = () => {
  const { isDarkMode } = useTheme()
  console.log(isDarkMode)
  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <Text style={[Styles.textBox, isDarkMode ? Styles.dark : Styles.light]}>1. Tap the gear icon to go to settings</Text>
      <Text style={[Styles.textBox, isDarkMode ? Styles.dark : Styles.light]}>2. Press the toggle switch to toggle between light and dark mode</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})