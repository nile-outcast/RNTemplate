import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

export const UncheckedIcon = () => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Path
      d="M21.25 11C21.25 16.6609 16.6609 21.25 11 21.25C5.33908 21.25 0.75 16.6609 0.75 11C0.75 5.33908 5.33908 0.75 11 0.75C16.6609 0.75 21.25 5.33908 21.25 11Z"
      fill={colors.white}
      stroke={colors.gray[1]}
      stroke-width="1.5"
    />
  </Svg>
)
