import React from 'react'
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import styled from 'styled-components/native'

import { useAlertContext } from 'src/modules/alert-context'
import { colors } from 'src/theme/colors'
import { Alert } from 'src/ui/alert'

import { Routes } from './routes'
import { TabBar } from './tabbar'

const Container = styled.SafeAreaView`
  flex: 1;
`

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  const { visible } = useAlertContext()

  return (
    <Container>
      <StatusBar
        backgroundColor={colors.headerBackground}
        barStyle="dark-content"
      />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Routes.MainNavigator}>
        <Stack.Screen name={Routes.MainNavigator} component={TabBar} />
      </Stack.Navigator>
      {visible && <Alert />}
    </Container>
  )
}
