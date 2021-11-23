import { RouteProp } from '@react-navigation/native'

import { Routes } from './navigation/routes'

type Params = {
  id: string
  title: string
}

export type RouteProps = {
  route: {
    params: Params
  }
}

export type RootStackParamList = {
  CharacterDetailsScreen: Params
}

export type CharacterDetailsScreenProps = RouteProp<
  RootStackParamList,
  Routes.CharacterDetailsScreen
>
