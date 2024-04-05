import '@tamagui/core/reset.css'
import { Slot } from 'expo-router'
import React from 'react'
import { TamaguiProvider } from 'tamagui'
import config from 'tamagui.config'
import { TRPCProvider } from 'utils/api'

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  return (
    <TRPCProvider>
      <TamaguiProvider config={config}>
        {/*
        The Stack component displays the current page.
        It also allows you to configure your screens 
      */}
        <Slot />
      </TamaguiProvider>
    </TRPCProvider>
  )
}

export default RootLayout
