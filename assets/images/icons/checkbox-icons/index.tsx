import React from 'react'

import { CheckedIcon } from './checked-icon'
import { UncheckedIcon } from './unchecked-icon'

type IconsProps = {
  isChecked: boolean
}

export const CheckboxIcons = ({ isChecked }: IconsProps) =>
  isChecked ? <CheckedIcon /> : <UncheckedIcon />
