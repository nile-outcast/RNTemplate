import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterListScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { colors } from 'src/theme/colors'
import { HeaderList } from 'src/ui/header-list'

import { Routes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.CharacterListScreen}
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.headerBackground },
      }}>
      <Tab.Screen
        name={Routes.CharacterListScreen}
        component={CharacterListScreen}
        options={{
          header: () => <HeaderList title="Character" />,
          tabBarIcon: ({ focused }) => <View />,
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          header: () => <HeaderList title="Location" />,
          tabBarIcon: ({ focused }) => <View />,
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          header: () => <HeaderList title="Episode" />,
          tabBarIcon: ({ focused }) => <View />,
        }}
      />
    </Tab.Navigator>
  )
}
