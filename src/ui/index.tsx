import React from 'react'

import { CoreCharacter, CoreLocation } from 'src/apollo/types'
import { DataKeys } from 'src/types'

import { CharacterItem } from './character-item'
import { LocationItem } from './location-item'

type ItemType = CoreCharacter | CoreLocation

export const renderItems: Record<
  DataKeys,
  (props: { item: ItemType }) => JSX.Element
> = {
  characters: ({ item }) => <CharacterItem character={item as CoreCharacter} />,
  locations: ({ item }) => <LocationItem location={item as CoreLocation} />,
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
