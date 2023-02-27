import React from 'react'

import {
  CoreCharacterFields,
  CoreLocationFields,
} from 'src/apollo/fragments.generated'
import { DataKeys } from 'src/types'

import { CharacterItem } from './character-item'
import { LocationItem } from './location-item'

type ItemType = CoreCharacterFields | CoreLocationFields

export const renderItems: Record<
  DataKeys,
  (props: { item: ItemType }) => JSX.Element
> = {
  characters: ({ item }) => (
    <CharacterItem character={item as CoreCharacterFields} />
  ),
  locations: ({ item }) => (
    <LocationItem location={item as CoreLocationFields} />
  ),
  episodes: () => <></>,
}

export { Alert } from './alert'
export { BackButton } from './back-button'
export { Button } from './button'
export { CharacterItem } from './character-item'
export { DetailsTitle } from './details-title'
export { EpisodeItem } from './episode-item'
export { FilterCheckboxField } from './filter-checkbox-field'
export { FilterTouchableField } from './filter-touchable-field'
export { FiltersModal } from './filters-modal'
export { HeaderDetails } from './header-details'
export { HeaderList } from './header-list'
export { HeaderTitle } from './header-title'
export { Loader } from './loader'
export { LocationItem } from './location-item'
export { SearchModal } from './search-modal'
export { TextSubtitle } from './text-subtitle'
export { TextTitle } from './text-title'
export { ScreenList } from './screen-list'
