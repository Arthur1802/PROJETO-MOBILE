import { StyleSheet, View, Text, useColorScheme, TouchableOpacity, Linking } from 'react-native'

import ParallaxScrollView from '../../components/ParallaxScrollView'
import { ThemedLogo } from '../../components/ThemedLogo'
import { ThemedText } from '../../components/ThemedText'

import { Link } from 'expo-router'

export default function HomeScreen() {
  const theme = useColorScheme() ?? 'light'

  return (
    <ParallaxScrollView
      headerBackgroundColor = {{ light: 'transparent', dark: 'transparent' }}
      headerImage = {
        <ThemedLogo source = {"sm_logo"} type = {"logo"} />
      }>

      <View style = {styles.mainContainer}>
        <ThemedText type = "title">Welcome user_name</ThemedText>

        <Link href = {"/welcome.jsx"} > Ir para o Perfil</Link>

        <View style = {styles.moduleContainer}>
          <TouchableOpacity style = {styles.containers}>
            <View style = {[styles.moduleBox, {backgroundColor: styles.moduleBoxBackgroundColor[theme]}]}>
              <ThemedLogo source = {"html_logo"} />
              <Text style = {{color: styles.moduleBoxTextColor[theme]}}>HTML</Text>
            </View>
          </TouchableOpacity>
          <ThemedText style = {styles.percentage}>0%</ThemedText>
        </View>
        
        <View style = {styles.moduleContainer}>
          <TouchableOpacity style = {styles.containers}>
            <View style = {[styles.moduleBox, {backgroundColor: styles.moduleBoxBackgroundColor[theme]}]}>
              <ThemedLogo source = {"css_logo"} />
              <Text style = {{color: styles.moduleBoxTextColor[theme]}}>CSS</Text>
            </View>
          </TouchableOpacity>
          <ThemedText style = {styles.percentage}>0%</ThemedText>
        </View>

        <View style = {styles.moduleContainer}>
          <TouchableOpacity style = {styles.containers}>
            <View style = {[styles.moduleBox, {backgroundColor: styles.moduleBoxBackgroundColor[theme]}]}>
              <ThemedLogo source = {"js_logo"} />
              <Text style = {{color: styles.moduleBoxTextColor[theme]}}>JavaScript</Text>
            </View>
          </TouchableOpacity>
          <ThemedText style = {styles.percentage}>0%</ThemedText>
        </View>

        <View style = {styles.moduleContainer}>
          <TouchableOpacity style = {styles.containers}>
            <View style = {[styles.moduleBox, {backgroundColor: styles.moduleBoxBackgroundColor[theme]}]}>
              <ThemedLogo source = {"html_css_js_logo"} />
              <Text style = {{color: styles.moduleBoxTextColor[theme]}}>HTML, CSS E JS</Text>
            </View>
          </TouchableOpacity>
          <ThemedText style = {styles.percentage}>0%</ThemedText>
        </View>
      
      </View>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    gap: 20,
    padding: 10,
  },
  moduleContainer: {
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: "50%",
  },
  containers: {
    width: "50%",
    padding: 0,
    margin: 0,
  },
  moduleBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  moduleBoxBackgroundColor: {
    light: "#454545",
    dark: "#515151",
  },
  moduleBoxTextColor: {
    light: "white",
    dark: "white",
  },
  percentage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: "max-content",
  },
})