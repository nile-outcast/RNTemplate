import React from 'react'
import { IconsProps } from 'assets/images/icons/types'

import { LocationActiveIcon } from './location-active-icon'
import { LocationInactiveIcon } from './location-inactive-icon'

export const LocationIcons = ({ isFocused }: IconsProps) =>
  isFocused ? <LocationActiveIcon /> : <LocationInactiveIcon />
