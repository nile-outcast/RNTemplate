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

import { useGetFullEpisode } from './episode-queries.generated'

export const EpisodeDetailsScreen = () => {
  const {
    params: { id },
  } = useRoute<Routes.LocationDetailsScreen>()

  const { data, loading } = useGetFullEpisode({ variables: { id } })

  if (loading) return <Loader />

  if (data) {
    const { air_date, characters, episode, name } = data.episode
    const renderItem = renderItems.characters

    return (
      <>
        <DetailsTitle preTitle={air_date} subTitle={episode} title={name} />

        <FlatList
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={styles.columnWrapper}
          data={characters}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            characters.length ? <SectionTitle>Characters</SectionTitle> : null
          }
          ListEmptyComponent={<HeaderTitle>No Characters</HeaderTitle>}
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
