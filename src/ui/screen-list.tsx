import type { FC } from 'react'
import React from 'react'
import type { VirtualizedListWithoutRenderItemProps } from 'react-native'
import {
  ActivityIndicator,
  FlatList,
  SectionList,
  StyleSheet,
} from 'react-native'
import type { QueryResult } from '@apollo/client'
import styled, { css } from 'styled-components/native'

import { colors } from 'src/theme'
import type { DataKeys } from 'src/types'

import type { ItemType } from '.'
import { renderItems, SectionTitle as Title } from '.'
import { useGetEpisodeSections, useReloader } from './hooks'
import { Loader } from './loader'

type Props = {
  dataKey: DataKeys
  data: QueryResult
}

export const ScreenList: FC<Props> = ({ children, dataKey, data }) => {
  if (data.loading) return <Loader />

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const reloader = useReloader(data, dataKey)
  const renderItem = renderItems[dataKey]

  const listProps: VirtualizedListWithoutRenderItemProps<ItemType> = {
    style: styles.container,
    showsVerticalScrollIndicator: false,
    keyExtractor: (item) => item.id,
    onEndReached: reloader,
    onEndReachedThreshold: 1.5,
    maxToRenderPerBatch: 6,
    windowSize: 11,
    ListFooterComponent: data.data?.[dataKey].info.next && (
      <ActivityIndicator size="large" color={colors.black} />
    ),
  }

  if (dataKey === 'episodes') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const sections = useGetEpisodeSections(data.data?.[dataKey].results ?? [])

    return (
      <>
        <SectionList
          {...listProps}
          sections={sections}
          renderItem={(info) => <ItemBox>{renderItem(info)}</ItemBox>}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
          stickySectionHeadersEnabled={false}
          SectionSeparatorComponent={SectionSeparatorComponent}
        />
        {children}
      </>
    )
  }

  return (
    <>
      <FlatList
        {...listProps}
        data={data.data?.[dataKey].results}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.contentFlatList}
        columnWrapperStyle={styles.columnWrapper}
      />
      {children}
    </>
  )
}

const ItemBox = styled.View`
  padding-left: 16px;
`
const SectionTitle = styled(Title)`
  padding: 20px 0 0 16px;
`
const sectionSeparatorStyles = {
  bottom: css`
    height: 10px;
    border-bottom-width: 1px;
  `,
  top: css`
    height: 20px;
    border-top-width: 1px;
  `,
}

const SectionSeparator = styled.View<{ isBottom: boolean }>`
  border-color: ${colors.gray[2]};
  ${({ isBottom }) =>
    isBottom ? sectionSeparatorStyles.bottom : sectionSeparatorStyles.top}
`

const SectionSeparatorComponent = ({
  trailingItem,
}: {
  trailingItem?: Record<string, unknown>
}) => <SectionSeparator isBottom={!!trailingItem} />

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  contentFlatList: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
})
