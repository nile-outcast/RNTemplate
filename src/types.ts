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

export type TitleProps = {
  title: string
}

export type FilterTitleProps = {
  title: keyof typeof FilterTitles & keyof typeof FilterSubtitles
}

export type ModalMenuProps = {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}

export enum HeaderTitles {
  Filter = 'Filter',
  Clear = 'Clear',
  Apply = 'APPLY',
  Back = 'Back',
}

export enum FilterTitles {
  Filter = 'Filter',
  Name = 'Name',
  Species = 'Species',
  Type = 'Type',
  Dimension = 'Dimension',
  Episode = 'Episode',
}

export enum FilterSubtitles {
  Name = 'Give a name',
  Species = 'Enter species',
  Type = 'Select one',
  Dimension = 'Select one',
  Episode = 'Select one',
}
