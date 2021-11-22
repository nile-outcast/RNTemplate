import React from 'react'
import { FlatList, Text } from 'react-native'
import styled from 'styled-components/native'

import { useGetFullCharacterQuery } from 'src/apollo/generated/types-and-hooks'
import { colors } from 'src/theme/colors'
import { RouteProps } from 'src/types'
import { DetailsTitle } from 'src/ui/details-title'
import { EpisodeItem } from 'src/ui/episode-item'

const SectionTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  margin-top: 20px;
  margin-left: 16px;
  color: ${colors.gray[0]};
`
const InfoContainer = styled.View`
  background-color: ${colors.white};
`
const SectionBox = styled.View`
  padding-left: 16px;
`

export const CharacterDetailsScreen = ({ route }: RouteProps) => {
  const { id } = route.params

  const { data, loading } = useGetFullCharacterQuery({
    variables: { id },
  })

  if (loading) return <Text>{'Loading'}</Text>
  if (!data) return null

  return (
    <>
      <DetailsTitle
        name={data?.character.name}
        status={data?.character.status}
        species={data?.character.species}
        image={data?.character.image}
      />
      <InfoContainer>
        <SectionTitle>Informations</SectionTitle>
        <SectionTitle>Episodes</SectionTitle>
        <SectionBox>
          <FlatList
            data={data?.character.episode}
            renderItem={({ item }) => <EpisodeItem episode={item} />}
          />
        </SectionBox>
      </InfoContainer>
    </>
  )
}
