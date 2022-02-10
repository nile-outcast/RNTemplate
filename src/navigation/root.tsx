import React from 'react'
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import styled from 'styled-components/native'

import { useAlertContext } from 'src/modules/alert-context'
import { CharacterDetailsScreen } from 'src/modules/character'
import { RootStackOptions, RootStackParams, Routes } from 'src/navigation/types'
import { colors } from 'src/theme/colors'
import { Alert } from 'src/ui/alert'
import { HeaderDetails } from 'src/ui/header-details'

import { TabBar } from './tabbar'

const Container = styled.SafeAreaView`
  flex: 1;
`

const option = ({ route }: RootStackOptions) => ({
  header: () => <HeaderDetails title={route.params.title} />,
})

const { Navigator, Screen } = createNativeStackNavigator<RootStackParams>()

export const RootNavigation = () => {
  const { visible } = useAlertContext()

  return (
    <Container>
      <StatusBar backgroundColor={colors.gray[5]} barStyle="dark-content" />
      <Navigator initialRouteName={Routes.MainNavigator}>
        <Screen
          name={Routes.MainNavigator}
          component={TabBar}
          options={{ headerShown: false }}
        />
        <Screen
          name={Routes.CharacterDetailsScreen}
          component={CharacterDetailsScreen}
          options={option}
        />
      </Navigator>
      {visible && <Alert />}
    </Container>
  )
}
