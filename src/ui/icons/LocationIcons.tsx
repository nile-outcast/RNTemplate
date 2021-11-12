import React from 'react'

import { LocationActiveIcon } from './active/LocationActiveIcon'
import { LocationInactiveIcon } from './inactive/LocationInactiveIcon'
import { IconsProps } from './types'

export const LocationIcons = ({ focused }: IconsProps) =>
  focused ? <LocationActiveIcon /> : <LocationInactiveIcon />
