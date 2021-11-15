import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { client } from 'src/apollo/client'
import { AlertProvider } from 'src/modules/alert-context'
import { RootNavigation } from 'src/navigation/root'

export const App = () => {
  return (
    <AlertProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ApolloProvider>
    </AlertProvider>
  )
}
