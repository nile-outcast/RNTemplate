import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Indicator = styled.ActivityIndicator`
  height: 100%;
  background-color: ${colors.white};
`

export const Loader = () => <Indicator size="large" color={colors.black} />
