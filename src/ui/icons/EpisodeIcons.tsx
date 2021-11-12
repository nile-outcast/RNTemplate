import React from 'react'

import { EpisodeActiveIcon } from './active/EpisodeActiveIcon'
import { EpisodeInactiveIcon } from './inactive/EpisodeInactiveIcon'
import { IconsProps } from './types'

export const EpisodeIcons = ({ focused }: IconsProps) =>
  focused ? <EpisodeActiveIcon /> : <EpisodeInactiveIcon />
