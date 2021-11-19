import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native'

export enum Routes {
  MainNavigator = 'MainNavigator',
  CharacterScreen = 'CharacterScreen',
  CharacterList = 'CharacterList',
  CharacterDetails = 'CharacterDetails',
  EpisodeScreen = 'EpisodeScreen',
  LocationScreen = 'LocationScreen',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
