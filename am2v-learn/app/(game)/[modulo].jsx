import { StyleSheet, TouchableOpacity, View} from 'react-native'
import { ParallaxScrollView } from '../../components/ParallaxScrollView'
import { ThemedText } from '../../components/ThemedText'

const Game = () => {
    const { modulo } = useLocalSearchParams()

    const theme = useColorScheme() ?? 'light'

    return (
        <ParallaxScrollView
            headerImage = {`${modulo}_logo`}
        >
            <ThemedText type = "subtitle" style = {styles.title}>{modulo}</ThemedText>
            <View style = {styles.gameBoard}>
                <ThemedText type = "defaultSemiBold" style = {styles.question}>PERGUNTA AQUI</ThemedText>
                <View style = {[styles.codeContainer, styles.codeContainerBackground[theme]]}>
                    {/* Código exemplo aqui */}
                </View>

                <View>
                    <TouchableOpacity style = {[styles.alterantivesBtns, styles.alterantivesBtnsBackground[theme]]}>
                        <ThemedText>RESPOSTA</ThemedText>
                    </TouchableOpacity>
                    {/* Alternativas aqui */}
                </View>
            </View>

        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    gameBoard: {
        padding: 20,
        alignItems: 'center',
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    codeContainer: {
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    codeContainerBackground: {
        light: {
            backgroundColor: '#f0f0f0',
        },
        dark: {
            backgroundColor: '#333',
        },
    },
    alterantivesBtns: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    alterantivesBtnsBackground: {
        light: {
            backgroundColor: '#f0f0f0',
        },
        dark: {
            backgroundColor: '#333',
        },
    },
})