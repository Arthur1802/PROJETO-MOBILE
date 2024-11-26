import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Animated, View, Text, TextInput, TouchableOpacity, useColorScheme, InputAccessoryView, Button } from 'react-native'

import { ExternalLink } from '../../components/ExternalLink'
import ParallaxScrollView from '../../components/ParallaxScrollView'
import { ThemedLogo } from '../../components/ThemedLogo'
import FloatingLabelInput from '../../components/FlotaingLabelInput'
import { useState } from 'react'
import { ThemedText } from '../../components/ThemedText'

export default function ProfileScreen() {
    const theme = useColorScheme() ?? 'light'

    const initialText = ""

    const [values, setValues] = useState({
        nome: { initialText },
        email: { initialText },
    })

    return (
        <ParallaxScrollView
            headerImage = "lg_logo"
        >
            <View style = {styles.profile_container}>

                <ThemedText type = "title">Profile</ThemedText>

                <TextInput
                    style = {[styles.input, { borderColor: styles.inputBorderColor[theme] }]}
                    placeholderTextColor = {styles.inputPlaceholderTextColor[theme]}
                    placeholder = "Nome"
                    value = {values.nome}
                    onChangeText = {setValues.nome}
                />

                <TextInput
                    style = {[styles.input, { borderColor: styles.inputBorderColor[theme] }]}
                    placeholderTextColor = {styles.inputPlaceholderTextColor[theme]}
                    placeholder = "Email"
                    value = {values.email}
                    onChangeText = {setValues.email}
                />

                <ExternalLink href = "#" style = {styles.link}>Altera Senha?</ExternalLink>

                <TouchableOpacity style = {styles.button} onPress = {() => { }}><ThemedText>Save</ThemedText></TouchableOpacity>
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
        light: '#333',
        dark: '#ccc',
    },
    inputPlaceholderTextColor: {
        light: '#333',
        dark: '#ccc',
    },
    link: {
        color: '#007bff',
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#0fc3e8',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    }
})