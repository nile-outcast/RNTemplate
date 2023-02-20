import React from 'react'

import { CoreLocation } from 'src/apollo/types'
import { Routes, useNavigation } from 'src/navigation/types'

import { ItemContainer } from './item-container'

type Props = {
  location: CoreLocation
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
