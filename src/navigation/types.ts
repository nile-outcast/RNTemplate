import { useRoute as useNaiveRoute } from '@react-navigation/native'
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
  [key in Routes]: key extends
    | Routes.CharacterDetailsScreen
    | Routes.EpisodeDetailsScreen
    | Routes.LocationDetailsScreen
    ? Params
    : undefined
}

export type RootStackOptions<T extends Routes> = NativeStackScreenProps<
  RootStackParams,
  T
>

export const useRoute = <T extends Routes = Routes>() =>
  useNaiveRoute<RootStackOptions<T>['route']>()

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<RootStackParams, Routes>>()
