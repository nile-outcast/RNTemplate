import React from 'react'

import { IconsProps } from 'src/ui/icons/types'

import { CharacterActiveIcon } from './character-active-icon'
import { CharacterInactiveIcon } from './character-inactive-icon'

export const CharacterIcons = ({ isFocused }: IconsProps) =>
  isFocused ? <CharacterActiveIcon /> : <CharacterInactiveIcon />
