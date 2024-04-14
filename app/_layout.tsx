import '@tamagui/core/reset.css'
import { Slot, router } from 'expo-router'
import React from 'react'
import { PanResponder, View } from 'react-native'
import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'
import { TRPCProvider } from '../utils/api'

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      setPan({ x: gestureState.dx, y: gestureState.dy })
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 100) {
        router.back()
      }
    },
  })
  return (
    <TRPCProvider>
      <TamaguiProvider config={config}>
        <View style={{ flex: 1 }} {...panResponder.panHandlers}>
          <Slot />
        </View>
      </TamaguiProvider>
    </TRPCProvider>
  )
}

export default RootLayout
