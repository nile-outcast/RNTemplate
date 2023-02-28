import React from 'react'
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import styled from 'styled-components/native'

import { useAlertContext } from 'src/modules/alert-context'
import { CharacterDetailsScreen } from 'src/modules/character'
import { EpisodeDetailsScreen } from 'src/modules/episode'
import { LocationDetailsScreen } from 'src/modules/location'
import type { RootStackOptions, RootStackParams } from 'src/navigation'
import { Routes } from 'src/navigation'
import { colors } from 'src/theme/colors'
import { Alert } from 'src/ui/alert'
import { HeaderDetails } from 'src/ui/header-details'

import { TabBar } from './tabbar'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.barsLightGray};
`

const option = ({
  route,
}: RootStackOptions<
  | Routes.CharacterDetailsScreen
  | Routes.LocationDetailsScreen
  | Routes.EpisodeDetailsScreen
>) => ({
  header: () => <HeaderDetails title={route.params.title} />,
})

const { Navigator, Screen } = createNativeStackNavigator<RootStackParams>()

export const RootNavigation = () => {
  const { visible } = useAlertContext()

  return (
    <Container>
      <StatusBar
        backgroundColor={colors.barsLightGray}
        barStyle="dark-content"
      />
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
        <Screen
          name={Routes.LocationDetailsScreen}
          component={LocationDetailsScreen}
          options={option}
        />
        <Screen
          name={Routes.EpisodeDetailsScreen}
          component={EpisodeDetailsScreen}
          options={option}
        />
      </Navigator>
      {visible && <Alert />}
    </Container>
  )
}
