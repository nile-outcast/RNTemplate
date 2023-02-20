import React, { FC } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { FilterTitles } from 'src/enums'
import { useSearchContex } from 'src/modules/search-context'
import { colors } from 'src/theme/colors'
import { FilterTitleProps, ModalMenuProps } from 'src/types'

import { ModalMenu } from './modal'
import { ModalHeader } from './modal-header'
import { Search } from './search'

type Props = ModalMenuProps & FilterTitleProps

type ResultProps = {
  item: string
  setValue?: (value: string) => void
}

const Result = ({ item, setValue }: ResultProps) => (
  <TextBox>
    <Text onPress={() => setValue && setValue(item)}>{item}</Text>
  </TextBox>
)

export const SearchModal: FC<Props> = ({ title, ...props }) => {
  const { results, setValue, reloader } = useSearchContex()

  return (
    <ModalMenu {...props}>
      <ModalHeader title={FilterTitles[title]} closeModal={props.closeModal} />
      <Search />
      <ResultContainer>
        {results && (
          <FlatList
            data={results}
            renderItem={({ item }) => (
              <Result item={item} setValue={setValue} />
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item}
            onEndReached={reloader}
            onEndReachedThreshold={1}
          />
        )}
      </ResultContainer>
    </ModalMenu>
  )
}

const ResultContainer = styled.View`
  width: 100%;
  border-color: ${colors.black};
  border-top-width: 0.5px;
`
const Text = styled.Text`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.black};
`
const TextBox = styled.TouchableOpacity`
  padding: 10.5px 16px;
  border-color: ${colors.black};
  border-bottom-width: 0.5px;
`
