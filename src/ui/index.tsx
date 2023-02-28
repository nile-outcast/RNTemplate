import React from 'react'
import type { ListRenderItemInfo } from 'react-native'

import type {
  CoreCharacterFields,
  CoreEpisodeFields,
  CoreLocationFields,
} from 'src/apollo/fragments.generated'
import type { DataKeys } from 'src/types'

import { CharacterItem } from './character-item'
import { EpisodeItem } from './episode-item'
import { LocationItem } from './location-item'

type ItemType = CoreCharacterFields | CoreLocationFields | CoreEpisodeFields

export const renderItems: Record<
  DataKeys,
  (info: ListRenderItemInfo<ItemType>) => JSX.Element
> = {
  characters: ({ item }) => (
    <CharacterItem character={item as CoreCharacterFields} />
  ),
  locations: ({ item }) => (
    <LocationItem location={item as CoreLocationFields} />
  ),
  episodes: ({ item, index }) => (
    <EpisodeItem episode={item as CoreEpisodeFields} index={index} />
  ),
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
export { RowItemTemplate } from './row-item-template'
export { SearchModal } from './search-modal'
export { SectionTitle } from './section-title'
export { ScreenList } from './screen-list'
export { TextSubtitle } from './text-subtitle'
export { TextTitle } from './text-title'
