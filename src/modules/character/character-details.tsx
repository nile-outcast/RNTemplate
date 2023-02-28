import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import { Routes, useNavigation, useRoute } from 'src/navigation'
import { colors } from 'src/theme/colors'
import {
  DetailsTitle,
  EpisodeItem,
  Loader,
  RowItemTemplate,
  SectionTitle as Title,
} from 'src/ui'

import { useGetFullCharacter } from './character-queries.generated'

export const CharacterDetailsScreen = () => {
  const {
    params: { id },
  } = useRoute<Routes.CharacterDetailsScreen>()
  const { navigate } = useNavigation()

  const { data, loading } = useGetFullCharacter({ variables: { id } })

  if (loading) return <Loader />

  if (data) {
    const { episode, gender, location, origin, type } = data.character

    const goToLocationDetailsScreen = () =>
      navigate(Routes.LocationDetailsScreen, {
        id: location.id,
        title: location.name,
      })

    return (
      <>
        <DetailsTitle {...data.character} />

        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <SectionTitle>Informations</SectionTitle>

          <SectionBox>
            <RowItemTemplate title="Gender" subTitle={gender} />
            <Divider />

            <RowItemTemplate title="Origin" subTitle={origin.name} />
            <Divider />

            <RowItemTemplate title="Type" subTitle={type ? type : 'unknown'} />
            <Divider />

            <RowItemTemplate
              title="Location"
              subTitle={location.name}
              onPress={goToLocationDetailsScreen}
            />
          </SectionBox>

          <SectionTitle>Episodes</SectionTitle>
          <SectionBox>
            {episode.map((item, index) => (
              <EpisodeItem key={index} index={index} episode={item} />
            ))}
          </SectionBox>
        </ScrollView>
      </>
    )
  }

  return null
}

const SectionTitle = styled(Title)`
  margin: 20px 0 10px 16px;
`
const SectionBox = styled.View`
  padding-left: 16px;
  margin-bottom: 20px;
  border-color: ${colors.black};
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
`
const Divider = styled.View`
  padding-left: 16px;
  border-color: ${colors.black};
  border-top-width: 0.5px;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
})
