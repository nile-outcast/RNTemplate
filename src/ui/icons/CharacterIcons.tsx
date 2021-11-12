import React from 'react'

import { CharacterActiveIcon } from './active/CharacterActiveIcon'
import { CharacterInactiveIcon } from './inactive/CharacterInactiveIcon'
import { IconsProps } from './types'

export const CharacterIcons = ({ focused }: IconsProps) =>
  focused ? <CharacterActiveIcon /> : <CharacterInactiveIcon />
