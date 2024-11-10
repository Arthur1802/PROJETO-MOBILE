import React, { useState, useRef } from 'react'
import { View, TextInput, Animated, StyleSheet, Text } from 'react-native'

const FloatingLabelInput = ({ label, value, onChangeText, style }) => {
    const [isFocused, setIsFocused] = useState(false)
    const animatedLabel = useRef(new Animated.Value(0)).current

    const handleFocus = () => {
        setIsFocused(true)
        Animated.timing(animatedLabel, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
        }).start()
    }

    const handleBlur = () => {
        if (!value) {
            setIsFocused(false)
            Animated.timing(animatedLabel, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }).start()
        }
    }

    const labelStyleSmall = {
        position: 'absolute',
        left: 8,
        fontSize: 12,
        opacity: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),
        color: '#000',
    }

    const labelStyleLarge = {
        position: 'absolute',
        left: 8,
        fontSize: 16,
        opacity: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
        }),
        color: '#aaa',
    }
      
      

    return (
        <View style = {[styles.container, {style}]}>
            <Animated.Text style = {labelStyleSmall}>{label}</Animated.Text>
            <Animated.Text style = {labelStyleLarge}>{label}</Animated.Text>
            <TextInput
                value = {value}
                onChangeText = {onChangeText}
                style = {[styles.input, isFocused && styles.inputFocused]}
                onFocus = {handleFocus}
                onBlur = {handleBlur}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 18,
        marginVertical: 12,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        fontSize: 16,
        padding: 8,
    },
    inputFocused: {
        borderBottomColor: '#007bff',
    },
})

export default FloatingLabelInput
