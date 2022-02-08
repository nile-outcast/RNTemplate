import React from 'react'
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import styled from 'styled-components/native'

import { useAlertContext } from 'src/modules/alert-context'
import { CharacterDetailsScreen } from 'src/modules/character'
import { colors } from 'src/theme/colors'
import { RouteProps } from 'src/types'
import { Alert } from 'src/ui/alert'
import { HeaderDetails } from 'src/ui/header-details'

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
      <StatusBar backgroundColor={colors.gray[5]} barStyle="dark-content" />
      <Stack.Navigator initialRouteName={Routes.MainNavigator}>
        <Stack.Screen
          name={Routes.MainNavigator}
          component={TabBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.CharacterDetailsScreen}
          component={CharacterDetailsScreen}
          options={{
            header: ({ route: { params } }: RouteProps) => (
              <HeaderDetails title={params?.title} />
            ),
          }}
        />
      </Stack.Navigator>
      {visible && <Alert />}
    </Container>
  )
}
