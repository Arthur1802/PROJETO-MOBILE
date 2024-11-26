import { StyleSheet, TextInput, TouchableOpacity, useColorScheme, View } from "react-native"
import { ThemedText } from "../../components/ThemedText"
import { ThemedLogo } from "../../components/ThemedLogo"
import ParallaxScrollView from "../../components/ParallaxScrollView"
import { ExternalLink } from "../../components/ExternalLink"

export default function SignIn() {
    const theme = useColorScheme() ?? 'light'

    const handleSubmit = () => {
        // Handle login
        console.log("Signin submitted")
    }

    const handleGoogleLogin = () => {
        // Handle Google login
        console.log("Google signin")
    }

    const handleLogin = () => {
        // Handle sign in
        console.log("Log in")
    } 

    return (
        <ParallaxScrollView
            headerImage = "sm_logo"
        >
            <View style = {styles.container}>
                <ThemedText style = {styles.title}>Sign In</ThemedText>

                <TextInput
                    style = {[styles.inputs, {borderColor: styles.inputBorderColor[theme]}]}
                    placeholder = "Nome"
                    placeholderTextColor = {styles.inputPlaceholderColor[theme]}
                ></TextInput>

                <TextInput
                    style = {[styles.inputs, {borderColor: styles.inputBorderColor[theme]}]}
                    placeholder = "Email"
                    placeholderTextColor = {styles.inputPlaceholderColor[theme]}
                ></TextInput>
                
                <TextInput
                    style = {[styles.inputs, {borderColor: styles.inputBorderColor[theme]}]}
                    placeholder = "Password"
                    placeholderTextColor = {styles.inputPlaceholderColor[theme]}
                ></TextInput>

                <TextInput
                    style = {[styles.inputs, {borderColor: styles.inputBorderColor[theme]}]}
                    placeholder = "Confirm Password"
                    placeholderTextColor = {styles.inputPlaceholderColor[theme]}
                ></TextInput>

                <ExternalLink style = {styles.link} href = "/forgotpassword">
                    <ThemedText style = {styles.linkText}>Forgot Password?</ThemedText>
                </ExternalLink>

                <TouchableOpacity
                    style = {[styles.button, {backgroundColor: "#0fc3e8"}]}
                    onPress = {handleSubmit}
                >
                    <ThemedText style = {styles.buttonText}>Sign In</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {[styles.button, {backgroundColor: styles.alterantiveBtnColor[theme]}]}
                    onPress = {handleGoogleLogin}
                >
                    <ThemedText style = {styles.buttonText}>Sign In with Google</ThemedText>
                </TouchableOpacity>

                <View style = {styles.separator}>
                    <ThemedText>OR</ThemedText>
                </View>

                <TouchableOpacity
                    style = {[styles.button, {backgroundColor: "#f07e13"}]}
                    onPress = {handleLogin}
                >
                    <ThemedText style = {styles.buttonText}>Log In</ThemedText>
                </TouchableOpacity>
            </View>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    inputs: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    inputBorderColor: {
        light: "#323232",
        dark: "#ccc",
    },
    inputPlaceholderColor: {
        light: "#aaa",
        dark: "#555",
    },
    link: {
        width: "80%",
        display: 'flex',
        alignItems: 'flex-end',
    },
    linkText: {
        color: "blue",
        textDecorationLine: "underline",
    },
    button: {
        width: "80%",
        padding: 10,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
    },
    separator: {
        width: "80%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alterantiveBtnText: {
        fontSize: 18,
    },
    alterantiveBtnColor: {
        light: "#ccc",
        dark: "#323232",
    }
})