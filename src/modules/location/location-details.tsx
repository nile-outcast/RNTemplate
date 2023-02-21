import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import { useGetFullLocation } from 'src/apollo/location-queries'
import { Routes, useRoute } from 'src/navigation'
import { colors } from 'src/theme/colors'
import { DetailsTitle, Loader, renderItems } from 'src/ui'

export const LocationDetailsScreen = () => {
  const {
    params: { id },
  } = useRoute<Routes.LocationDetailsScreen>()

  const { data, loading } = useGetFullLocation({ id })

  const renderItem = renderItems.characters

  if (loading) return <Loader />

  if (data) {
    const { dimension, name, residents, type } = data.location

    return (
      <>
        <DetailsTitle name={name} status={type} species={dimension} />

        <FlatList
          ListHeaderComponent={<SectionTitle>Residents</SectionTitle>}
          contentContainerStyle={styles.contentContainer}
          data={residents}
          renderItem={renderItem}
          horizontal={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </>
    )
  }

  return null
}

const SectionTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  margin: 10px 0 0 8px;
  color: ${colors.gray[0]};
`

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: colors.white,
    minHeight: '100%',
  },
})
