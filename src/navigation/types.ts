import { useRoute } from '@react-navigation/native'
import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export enum Routes {
  MainNavigator = 'MainNavigator',
  CharacterScreen = 'CharacterScreen',
  CharacterDetailsScreen = 'CharacterDetailsScreen',
  EpisodeScreen = 'EpisodeScreen',
  EpisodeDetailsScreen = 'EpisodeDetailsScreen',
  LocationScreen = 'LocationScreen',
  LocationDetailsScreen = 'LocationDetailsScreen',
}

type Params = {
  id: string
  title: string
}

export type RootStackParams = {
  [Routes.MainNavigator]: undefined
  [Routes.CharacterDetailsScreen]: Params
  [Routes.EpisodeDetailsScreen]: Params
  [Routes.LocationDetailsScreen]: Params
}

export type RootStackOptions = NativeStackScreenProps<
  RootStackParams,
  keyof Omit<RootStackParams, Routes.MainNavigator>
>

export const useRootStackRoute = () => useRoute<RootStackOptions['route']>()

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
