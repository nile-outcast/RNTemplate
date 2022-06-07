import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  CharacterIcons,
  EpisodeIcons,
  LocationIcons,
} from 'assets/images/icons'

import { ScreenTitles } from 'src/enums'
import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { colors } from 'src/theme/colors'

import { Routes } from './types'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.CharacterScreen}
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.barsLightGray },
      }}>
      <Tab.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{
          title: ScreenTitles.Character,
          tabBarIcon: ({ focused }) => <CharacterIcons isFocused={focused} />,
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          title: ScreenTitles.Location,
          tabBarIcon: ({ focused }) => <LocationIcons isFocused={focused} />,
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          title: ScreenTitles.Episode,
          tabBarIcon: ({ focused }) => <EpisodeIcons isFocused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
}
