import { StyleSheet, View, Text, useColorScheme } from 'react-native'

import ParallaxScrollView from '../../components/ParallaxScrollView'
import { ThemedLogo } from '../../components/ThemedLogo'
import { ThemedText } from '../../components/ThemedText'

export default function HomeScreen() {
  const colorTheme = useColorScheme() ?? 'light'

  return (
    <ParallaxScrollView
      headerBackgroundColor = {{ light: 'transparent', dark: 'transparent' }}
      headerImage = {
        <ThemedLogo source = {"sm_logo"} type = {"logo"} />
      }>
      <View style = {styles.titleContainer}>
        <ThemedText type = "title">Welcome user_name</ThemedText>
      </View>

      <View style = {styles.mainContainer}>
        <View style = {styles.moduleContainer}>
          <View style = {[styles.moduleBox, {backgroundColor: styles.moduleBoxBackgroundColor[colorTheme]}]}>
            <ThemedLogo source = {"html_logo"} />
            <Text style = {{color: styles.moduleBoxTextColor[colorTheme]}}>HTML</Text></View>
          <ThemedText>0%</ThemedText>
        </View>
        
        <View style = {styles.moduleContainer}>
          <View style = {[styles.moduleBox, {backgroundColor: styles.moduleBoxBackgroundColor[colorTheme]}]}>
            <ThemedLogo source = {"css_logo"} />
            <Text style = {{color: styles.moduleBoxTextColor[colorTheme]}}>CSS</Text></View>
          <ThemedText>0%</ThemedText>
        </View>
        
        <View style = {styles.moduleContainer}>
          <View style = {[styles.moduleBox, {backgroundColor: styles.moduleBoxBackgroundColor[colorTheme]}]}>
            <ThemedLogo source = {"js_logo"} />
            <Text style = {{color: styles.moduleBoxTextColor[colorTheme]}}>JS</Text></View>
          <ThemedText>0%</ThemedText>
        </View>
        
        <View style = {styles.moduleContainer}>
          <View style = {[styles.moduleBox, {backgroundColor: styles.moduleBoxBackgroundColor[colorTheme]}]}>
            <ThemedLogo source = {"html_css_js_logo"} />
            <Text style = {{color: styles.moduleBoxTextColor[colorTheme]}}>HTML, CSS E JS</Text></View>
          <ThemedText>0%</ThemedText>
        </View>
      
      </View>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
    padding: 10,
  },
  mainContainer: {
    flexDirection: 'column',
    gap: 20,
    padding: 10,
  },
  moduleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: "50%",
  },
  moduleBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    padding: 10,
    borderRadius: 5,
    width: "55%",
    boxShadow: "0 8px 5px 0 rgba(255, 255, 255, .25)",
  },
  moduleBoxBackgroundColor: {
    light: "#232323",
    dark: "#515151",
  },
  moduleBoxTextColor: {
    light: "white",
    dark: "white",
  },
})