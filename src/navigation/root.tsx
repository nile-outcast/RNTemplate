import React from 'react'
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import styled from 'styled-components/native'

import { useAlertContext } from 'src/modules/alert-context'
import { CharacterDetailsScreen } from 'src/modules/character'
import { colors } from 'src/theme/colors'
import { Alert } from 'src/ui/alert'
import { HeaderDetails } from 'src/ui/header-details'
import { HomeIndicator } from 'src/ui/icons/home-indicator'

import { Routes } from './routes'
import { TabBar } from './tabbar'

const Container = styled.SafeAreaView`
  flex: 1;
`
const IndicatorBox = styled.View`
  padding-top: 20px;
  padding-bottom: 8px;
  align-items: center;
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
            header: ({ route }) => <HeaderDetails route={route} />,
          }}
        />
      </Stack.Navigator>
      <IndicatorBox>
        <HomeIndicator />
      </IndicatorBox>
      {visible && <Alert />}
    </Container>
  )
}
