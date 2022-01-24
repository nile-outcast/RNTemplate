import React from 'react'
import Svg, { Rect } from 'react-native-svg'

import { colors } from 'src/theme/colors'

export const ModalLine = () => (
  <Svg width="36" height="5" viewBox="0 0 36 5" fill="none">
    <Rect width="36" height="5" rx="2.5" fill={colors.gray[2]} />
  </Svg>
)
