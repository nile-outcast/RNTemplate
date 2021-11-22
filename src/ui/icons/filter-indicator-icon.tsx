import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

export const FilterIndicatorIcon = () => (
  <Svg width="12" height="13" viewBox="0 0 12 13" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 12.7222C9.31371 12.7222 12 10.0359 12 6.72223C12 3.40852 9.31371 0.722229 6 0.722229C2.68629 0.722229 0 3.40852 0 6.72223C0 10.0359 2.68629 12.7222 6 12.7222Z"
      fill={colors.purple}
    />
  </Svg>
)
