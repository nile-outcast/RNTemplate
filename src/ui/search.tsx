import React from 'react'
import { ActionIcon, SearchIcon } from 'assets/images/icons'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { useSearchContex } from './utils'

const SeachBox = styled.View`
  flex-direction: row;
  align-items: center;
  height: 36px;
  padding: 0 10px;
  margin: 8.5px 16px;
  background-color: ${colors.gray[4]};
  border-radius: 10px;
`

const Input = styled.TextInput`
  flex: 1;
  padding: 0 7px;
`

export const Search = () => {
  const { value, setValue } = useSearchContex()

  return (
    <SeachBox>
      <SearchIcon />
      <Input
        value={value}
        onChangeText={(text) => setValue && setValue(text)}
        placeholder="Search"
      />
      <ActionIcon />
    </SeachBox>
  )
}
