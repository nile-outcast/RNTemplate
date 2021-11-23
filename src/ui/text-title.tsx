import React, { FC } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Text = styled.Text`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.black};
`

export const TextTitle: FC = ({ children }) => <Text>{children}</Text>
