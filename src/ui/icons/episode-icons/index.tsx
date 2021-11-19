import React from 'react'

import { IconsProps } from 'src/ui/icons/types'

import { EpisodeActiveIcon } from './episode-active-icon'
import { EpisodeInactiveIcon } from './episode-inactive-icon'

export const EpisodeIcons = ({ isFocused }: IconsProps) =>
  isFocused ? <EpisodeActiveIcon /> : <EpisodeInactiveIcon />
