import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  CharacterIcons,
  EpisodeIcons,
  LocationIcons,
} from 'assets/images/icons'

import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { colors } from 'src/theme/colors'
import { HeaderList } from 'src/ui/header-list'

import { Routes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.CharacterScreen}
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.headerBackground },
      }}>
      <Tab.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{
          tabBarIcon: ({ focused }) => <CharacterIcons isFocused={focused} />,
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          header: () => <HeaderList title="Location" />,
          tabBarIcon: ({ focused }) => <LocationIcons isFocused={focused} />,
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          header: () => <HeaderList title="Episode" />,
          tabBarIcon: ({ focused }) => <EpisodeIcons isFocused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
}
