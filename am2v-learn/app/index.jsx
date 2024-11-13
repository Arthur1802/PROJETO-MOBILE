import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../components/ThemedText'
import ParallaxScrollView from '../components/ParallaxScrollView'
import { useNavigation } from 'expo-router'

export default function Welcome() {
    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate('auth/login') 
    }

    const handleSignIn = () => {
        navigation.navigate('auth/signin')
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor = {{ light: 'transparent', dark: 'transparent' }}
            headerImage = "lg_logo"
        >
            <View style = {styles.container}>
                <ThemedText style = {styles.title}>Welcome to AM2V Learn</ThemedText>

                <TouchableOpacity style = {[styles.buttons, {backgroundColor: "#0fc3e8"}]} onPress = {handleLogin}>
                    <ThemedText style = {styles.buttonsText}>Login</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.buttons, {backgroundColor: "#f07e13"}]} onPress = {handleSignIn}>
                    <ThemedText style = {styles.buttonsText}>Sign In</ThemedText>
                </TouchableOpacity>
            </View>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        fontSize: 16,

    },  
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: "50%"
    },
    buttons: {
        width: '50%',
        padding: 10,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsText: {
        width: 'max-content',
        fontSize: 16,
    }
})