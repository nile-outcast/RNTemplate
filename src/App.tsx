import React from 'react'
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { ApolloProvider } from 'src/apollo/client'
import { AlertProvider } from 'src/modules/alert-context'
import { RootNavigation } from 'src/navigation'

LogBox.ignoreLogs(['new NativeEventEmitter'])
LogBox.ignoreAllLogs()

export const App = () => {
  return (
    <AlertProvider>
      <ApolloProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ApolloProvider>
    </AlertProvider>
  )
}
