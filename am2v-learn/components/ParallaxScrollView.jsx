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

export default function ParallaxScrollView({ children, headerImageSrc, headerHeight, headerBackgroundColor, style, ...otherProps }) {
  const colorScheme = useColorScheme() ?? 'light'

  const headerImage = headerImageSrc
  
  const scrollRef = useAnimatedRef()
  const scrollOffset = useScrollViewOffset(scrollRef)

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
            <ThemedLogo src = {`${headerImage}`} type = {"logo"} />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 100,
    overflow: 'hidden',
  },
  content: {
    padding: 20,
  },
})