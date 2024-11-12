import { StyleSheet, View } from "react-native"
import { ThemedText } from "../../components/ThemedText"
import { ThemedLogo } from "../../components/ThemedLogo"
import ParallaxScrollView from "../../components/ParallaxScrollView"

export default function SignIn() {
    return (
        <ParallaxScrollView
            headerBackgroundColor = {{ light: 'transparent', dark: 'transparent' }}
            headerImage = {
                <ThemedLogo source = {"sm_logo"} type = {"logo"} />
            }
        >
            <View style = {styles.container}>
                <ThemedText>Sign In</ThemedText>
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
})