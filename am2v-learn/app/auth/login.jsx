import { StyleSheet, TextInput, TouchableOpacity, useColorScheme, View } from "react-native"
import { ThemedText } from "../../components/ThemedText"
import ParallaxScrollView from "../../components/ParallaxScrollView"
import { ExternalLink } from "../../components/ExternalLink"

export default function Login() {
    const theme = useColorScheme() ?? 'light'

    const handleSubmit = () => {
        // Handle login
        console.log("Login submitted")
    }

    const handleGoogleLogin = () => {
        // Handle Google login
        console.log("Google login")
    }

    const handleSignIn = () => {
        // Handle sign in
        console.log("Sign in")
    } 

    return (
        <ParallaxScrollView
            headerBackgroundColor = {{ light: 'transparent', dark: 'transparent' }}
            headerImage = "sm_logo"
        >
            <View style = {styles.container}>
                <ThemedText style = {styles.title}>Login</ThemedText>

                <TextInput
                    style = {[styles.inputs, {borderColor: styles.inputBorderColor[theme]}]}
                    placeholder = "Email"
                    placeholderTextColor = {styles.inputPlaceholderColor[theme]}
                >
                </TextInput>

                <TextInput
                    style = {[styles.inputs, {borderColor: styles.inputBorderColor[theme]}]}
                    placeholder = "Password"
                    placeholderTextColor = {styles.inputPlaceholderColor[theme]}
                >
                </TextInput>

                <ExternalLink
                    href = "/forgotpassword"
                    style = {styles.link}
                >
                    <ThemedText style = {styles.linkText}>Forgot Password?</ThemedText>
                </ExternalLink>

                <TouchableOpacity
                    onPress = {handleSubmit}
                    style = {[styles.button, {backgroundColor: "#0fc3e8"}]}
                >
                    <ThemedText style = {styles.buttonText}>Log In</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {[styles.button, {backgroundColor: styles.alterantiveBtnColor[theme]}]}
                    onPress = {handleGoogleLogin}
                >
                    {/* Google icon */}
                    <ThemedText style = {styles.alterantiveBtnText}>Continue with Google</ThemedText>
                </TouchableOpacity>

                <View style = {styles.separator}>
                    <ThemedText>OR</ThemedText>
                </View>

                <TouchableOpacity
                    style = {[styles.button, {backgroundColor: "#f07e13"}]}
                    onPress = {handleSignIn}
                >
                    <ThemedText style = {styles.buttonText}>Sign In</ThemedText>
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