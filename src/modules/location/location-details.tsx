import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import type { Routes } from 'src/navigation'
import { useRoute } from 'src/navigation'
import { colors } from 'src/theme/colors'
import {
  DetailsTitle,
  HeaderTitle,
  Loader,
  renderItems,
  SectionTitle,
} from 'src/ui'

import { useGetFullLocation } from './location-queries.generated'

export const LocationDetailsScreen = () => {
  const {
    params: { id },
  } = useRoute<Routes.LocationDetailsScreen>()

  const { data, loading } = useGetFullLocation({ variables: { id } })

  if (loading) return <Loader />

  if (data) {
    const { dimension, name, residents, type } = data.location
    const renderItem = renderItems.characters

    return (
      <>
        <DetailsTitle name={name} status={type} species={dimension} />

        <FlatList
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={styles.columnWrapper}
          data={residents}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            residents.length ? <SectionTitle>Residents</SectionTitle> : null
          }
          ListEmptyComponent={<HeaderTitle>No Residents</HeaderTitle>}
        />
      </>
    )
  }

  return null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
})
