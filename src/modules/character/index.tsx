import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Routes } from 'src/navigation/routes'
import { Header } from 'src/ui/header'

import { CharacterDetails } from './character-details'
import { CharacterList } from './character-list'

const Stack = createNativeStackNavigator()

export const CharacterScreen = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.CharacterList}>
      <Stack.Screen
        name={Routes.CharacterList}
        component={CharacterList}
        options={{
          header: () => <Header title="Character" />,
        }}
      />
      <Stack.Screen
        name={Routes.CharacterDetails}
        component={CharacterDetails}
      />
    </Stack.Navigator>
  )
}
