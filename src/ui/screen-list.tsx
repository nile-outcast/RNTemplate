import React, { FC } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { QueryResult } from '@apollo/client'

import { colors } from 'src/theme/colors'
import { DataKeys } from 'src/types'

import { renderItems } from '.'
import { useReloader } from './hooks'
import { Loader } from './loader'

type Props = {
  data: QueryResult
  dataKey: DataKeys
}

export const ScreenList: FC<Props> = ({ children, data, dataKey }) => {
  const reloader = useReloader(data, dataKey)

  const renderItem = renderItems[dataKey]

  if (data.loading) return <Loader />

  return (
    <>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data.data?.[dataKey].results}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onEndReached={reloader}
        onEndReachedThreshold={1.5}
        maxToRenderPerBatch={6}
        windowSize={11}
      />
      {children}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
})
