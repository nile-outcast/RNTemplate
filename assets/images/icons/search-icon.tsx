import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

export const SearchIcon = () => (
  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.7431 12.5742L9.91009 8.73974C10.5972 7.80264 10.9652 6.66971 10.9601 5.50774C10.947 2.47459 8.49372 0.0177575 5.46059 0.000238823C4.00907 -0.00632847 2.61522 0.567895 1.58953 1.59499C0.563845 2.62208 -0.00846493 4.01673 9.46502e-05 5.46824C0.0132044 8.50166 2.4667 10.9587 5.50009 10.9762C6.6668 10.9813 7.80387 10.6089 8.74159 9.91474L8.74559 9.91174L12.5751 13.7432C12.7821 13.9605 13.0907 14.0484 13.3811 13.9729C13.6716 13.8975 13.8983 13.6706 13.9735 13.3801C14.0487 13.0895 13.9605 12.7811 13.7431 12.5742ZM5.49609 9.87824C3.06951 9.86428 1.10675 7.89884 1.09609 5.47224C1.08955 4.31118 1.54743 3.19569 2.36783 2.37407C3.18822 1.55246 4.30303 1.09292 5.46409 1.09774C7.89068 1.1117 9.85344 3.07714 9.86409 5.50374C9.87064 6.6648 9.41276 7.78029 8.59236 8.6019C7.77197 9.42352 6.65716 9.88306 5.49609 9.87824Z"
      fill={colors.gray[1]}
    />
  </Svg>
)
