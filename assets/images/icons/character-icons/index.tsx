import React from 'react'
import type { IconsProps } from 'assets/images/icons/types'

import { CharacterActiveIcon } from './character-active-icon'
import { CharacterInactiveIcon } from './character-inactive-icon'

export const CharacterIcons = ({ isFocused }: IconsProps) =>
  isFocused ? <CharacterActiveIcon /> : <CharacterInactiveIcon />
