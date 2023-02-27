import React from 'react'
import type { IconsProps } from 'assets/images/icons/types'

import { EpisodeActiveIcon } from './episode-active-icon'
import { EpisodeInactiveIcon } from './episode-inactive-icon'

export const EpisodeIcons = ({ isFocused }: IconsProps) =>
  isFocused ? <EpisodeActiveIcon /> : <EpisodeInactiveIcon />
