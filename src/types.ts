import { RouteProp } from '@react-navigation/native'

import { FilterSubtitles, FilterTitles } from './enums'
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

export type TitleProps = {
  title: string
  isFiltered?: boolean
}

export type FilterTitleProps = {
  title: keyof typeof FilterTitles & keyof typeof FilterSubtitles
}

export type ModalMenuProps = {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}

export type SearchState = {
  results: string[] | undefined
  value: string
  setValue?: (value: string) => void
  reloader?: () => void
}
