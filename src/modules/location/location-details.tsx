import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import { useGetFullLocation } from 'src/apollo/location-queries'
import { useRootStackRoute } from 'src/navigation/types'
import { colors } from 'src/theme/colors'
import { DetailsTitle, Loader, renderItems } from 'src/ui'

export const LocationDetailsScreen = () => {
  const {
    params: { id },
  } = useRootStackRoute()

  const { data, loading } = useGetFullLocation({ id })

  const renderItem = renderItems.characters

  return loading ? (
    <Loader />
  ) : (
    <>
      {data && (
        <>
          <DetailsTitle
            name={data.location.name}
            status={data.location.type}
            species={data.location.dimension}
          />
          <FlatList
            ListHeaderComponent={<SectionTitle>Residents</SectionTitle>}
            contentContainerStyle={styles.contentContainer}
            data={data.location.residents}
            renderItem={renderItem}
            horizontal={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </>
  )
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
