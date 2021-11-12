import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { CharacterIcons, EpisodeIcons, LocationIcons } from 'src/ui/icons'

import { Routes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.CharacterScreen}>
      <Tab.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{
          title: 'Character',
          headerTitle: 'Characters',
          tabBarIcon: ({ focused }) => <CharacterIcons isFocused={focused} />,
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          title: 'Location',
          headerTitle: 'Location',
          tabBarIcon: ({ focused }) => <LocationIcons isFocused={focused} />,
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          title: 'Episode',
          headerTitle: 'Episode',
          tabBarIcon: ({ focused }) => <EpisodeIcons isFocused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
}
