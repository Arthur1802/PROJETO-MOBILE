import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Animated, View, Text, TextInput, Button } from 'react-native'

import { ExternalLink } from '../../components/ExternalLink'
import ParallaxScrollView from '../../components/ParallaxScrollView'
import { ThemedLogo } from '../../components/ThemedLogo'
import FloatingLabelInput from '../../components/FlotaingLabelInput'
import { useState } from 'react'
import { ThemedText } from '../../components/ThemedText'

export default function ProfileScreen() {
  const [values, setValues] = useState({
    nome: "",
    email: "",
  })

  return (
    <ParallaxScrollView
      headerImage = {
        <ThemedLogo source = "sm_logo" type = {"logo"} />
      }
      headerBackgroundColor = {styles.headerBackgroundColor}
    >
      <View style = {styles.profile_container}>

        <ThemedText type = "title">Profile</ThemedText>

        {/* <FloatingLabelInput label = "Nome" style = {styles.input} value = {values.nome} onChangeText = {setValues.nome} />
        <FloatingLabelInput label = "Email" style = {styles.input} value = {values.email} onChangeText = {setValues.email} /> */}
        <TextInput style = {[styles.input, {borderColor: styles.inputBorderColor}]} placeholder = "Nome" value = {values.nome} onChangeText = {setValues.nome} />
        <TextInput style = {[styles.input, {borderColor: styles.inputBorderColor}]} placeholder = "Email" value = {values.email} onChangeText = {setValues.email} />
        <ExternalLink href = "#" style = {styles.link}>Altera Senha?</ExternalLink>
        <Button title = "Submit" onPress = {() => {}}></Button>
      </View>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerBackgroundColor: {
    light: 'transparent',
    dark: 'transparent',
  },
  profile_container: {
    padding: 20,
    alignItems: 'center',
    gap: 20,
  },
  input: {
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  inputBorderColor: {
    light: '#ccc',
    dark: '#333',
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: 16,
  }
})