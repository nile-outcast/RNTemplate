import type { FC } from 'react'
import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import { FilterTitles } from 'src/enums'
import { useSearchContex } from 'src/modules/search-context'
import { colors } from 'src/theme/colors'
import type { FilterTitleProps, ModalMenuProps } from 'src/types'

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
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={results}
        renderItem={({ item }) => <Result item={item} setValue={setValue} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        onEndReached={reloader}
        onEndReachedThreshold={1}
      />
    </ModalMenu>
  )
}

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

const styles = StyleSheet.create({
  container: {
    borderColor: colors.black,
    borderTopWidth: 0.5,
    width: '100%',
  },
  contentContainer: {
    paddingBottom: 20,
  },
})
