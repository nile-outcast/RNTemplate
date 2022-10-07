import React, { FC } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Text = styled.Text<{ color: string }>`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  color: ${({ color }) => color};
`

export const TextTitle: FC<{ color?: string }> = ({
  children,
  color = colors.black,
}) => <Text color={color}>{children}</Text>
