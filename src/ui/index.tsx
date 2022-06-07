import React from 'react'

import { CoreCharacter, CoreLocation } from 'src/apollo/types'
import { Keys } from 'src/types'

import { CharacterItem } from './character-item'
import { LocationItem } from './location-item'

type ItemType = CoreCharacter | CoreLocation

export const renderItems: Record<
  Keys,
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
export { HeaderDetails } from './header-details'
export { HeaderFilter } from './header-filter'
export { HeaderList } from './header-list'
export { HeaderTitle } from './header-title'
export { Loader } from './loader'
export { LocationItem } from './location-item'
export { ModalMenu } from './modal'
export { Search } from './search'
export { SearchModal } from './search-modal'
export { TextSubtitle } from './text-subtitle'
export { TextTitle } from './text-title'
export { ScreenList } from './screen-list'
