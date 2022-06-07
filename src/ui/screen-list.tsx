import React, { FC } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { QueryResult } from '@apollo/client'

import { colors } from 'src/theme/colors'
import { Keys } from 'src/types'

import { renderItems } from '.'
import { useReloader } from './hooks'
import { Loader } from './loader'

type Props = {
  data: QueryResult
  dataKey: Keys
}

export const ScreenList: FC<Props> = ({ children, data, dataKey }) => {
  const reloader = useReloader(data, dataKey)

  const renderItem = renderItems[dataKey]

  return data.loading ? (
    <Loader />
  ) : (
    <>
      {data.data && (
        <>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={data.data?.[dataKey].results}
            renderItem={renderItem}
            horizontal={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            onEndReached={reloader}
            onEndReachedThreshold={1}
          />
          {children}
        </>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: colors.white,
    minHeight: '100%',
  },
})
