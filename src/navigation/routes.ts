import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native'

export enum Routes {
  MainNavigator = 'MainNavigator',
  CharacterListScreen = 'CharacterListScreen',
  CharacterDetailsScreen = 'CharacterDetailsScreen',
  EpisodeScreen = 'EpisodeScreen',
  LocationScreen = 'LocationScreen',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
