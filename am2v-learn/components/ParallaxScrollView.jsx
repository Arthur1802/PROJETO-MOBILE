import { useCallback, useState } from 'react'
import { ScrollView, StyleSheet, useColorScheme, View, RefreshControl } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedLogo } from './ThemedLogo'

const HEADER_HEIGHT = 50

export default function ParallaxScrollView({ children, headerImage, headerHeight, headerBackgroundColor, style, ...otherProps }) {
  const colorScheme = useColorScheme() ?? 'light'
  const scrollRef = useAnimatedRef()
  const scrollOffset = useScrollViewOffset(scrollRef)

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    }
  })

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }, [])

  return (
    <SafeAreaView style = {[styles.container, {style}]}>
      <ScrollView ref = {scrollRef} scrollEventThrottle = {16}>
        <RefreshControl />
          <View style = {styles.header}>
            <ThemedLogo source = {"sm_logo"} type = {"logo"} />
          </View>
        <View style = {[styles.content, {style}]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    overflow: 'hidden',
  },
  content: {
    padding: 20,
  },
})