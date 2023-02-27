import React from 'react'

import type { CoreLocationFields } from 'src/apollo/fragments.generated'
import { Routes, useNavigation } from 'src/navigation'

import { ItemContainer } from './item-container'

type Props = {
  location: CoreLocationFields
}

export const LocationItem = React.memo(({ location }: Props) => {
  const { navigate } = useNavigation()

  const onPress = () =>
    navigate(Routes.LocationDetailsScreen, {
      id: location.id,
      title: location.name,
    })

  return (
    <ItemContainer
      name={location.name}
      subtext={location.type}
      onPress={onPress}
    />
  )
})
