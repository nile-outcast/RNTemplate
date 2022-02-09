import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Routes } from './routes'

export type Params = {
  id: string
  title: string
}

export type RootStackParams = {
  [Routes.MainNavigator]: undefined
  [Routes.CharacterDetailsScreen]: Params
  [Routes.EpisodeDetailsScreen]: Params
  [Routes.LocationDetailsScreen]: Params
}

export type OptionProps = NativeStackScreenProps<
  RootStackParams,
  keyof Omit<RootStackParams, Routes.MainNavigator>
>

export type RouteProps = {
  route: OptionProps['route']
}
