import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import '@tamagui/core/reset.css'
import { TRPCProvider } from 'utils/api'
import { TamaguiProvider } from 'tamagui'
import config from 'tamagui.config'

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
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f472b6',
            },
          }}
        />
        <StatusBar />
      </TamaguiProvider>
    </TRPCProvider>
  )
}

export default RootLayout
