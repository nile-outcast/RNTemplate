import React, { FC } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Text = styled.Text`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.gray[6]};
`

export const TextSubtitle: FC = ({ children }) => <Text>{children}</Text>
