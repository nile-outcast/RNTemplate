import React from 'react'
import { Text } from 'react-native'
import { ArrowIcon } from 'assets/images/icons'
import styled from 'styled-components/native'

import { useGetFullCharacterQuery } from 'src/apollo/generated/types-and-hooks'
import { colors } from 'src/theme/colors'
import { RouteProps } from 'src/types'
import { DetailsTitle, EpisodeItem, TextSubtitle, TextTitle } from 'src/ui'

const InfoContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`
const SectionTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  margin: 20px 0 10px 16px;
  color: ${colors.gray[0]};
`
const SectionBox = styled.View`
  padding-left: 16px;
  margin-bottom: 20px;
  border-color: ${colors.black};
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
`
const InfoBox = styled.View<{ isBorder?: boolean }>`
  flex: 1;
  padding-top: 9px;
  padding-bottom: 11px;
  border-color: ${colors.black};
  border-bottom-width: ${({ isBorder }) => (isBorder ? 0 : 0.5)}px;
`
const LocationBox = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-right: 16px;
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
      <InfoContainer showsVerticalScrollIndicator={false}>
        <SectionTitle>Informations</SectionTitle>
        <SectionBox>
          <InfoBox>
            <TextTitle>Gender</TextTitle>
            <TextSubtitle>{data?.character.gender}</TextSubtitle>
          </InfoBox>

          <InfoBox>
            <TextTitle>Origin</TextTitle>
            <TextSubtitle>{data?.character.origin.name}</TextSubtitle>
          </InfoBox>

          <InfoBox>
            <TextTitle>Type</TextTitle>
            <TextSubtitle>
              {data?.character.type ? data?.character.type : 'Unknown'}
            </TextSubtitle>
          </InfoBox>

          <LocationBox>
            <InfoBox isBorder>
              <TextTitle>Location</TextTitle>
              <TextSubtitle>{data?.character.location.name}</TextSubtitle>
            </InfoBox>
            <ArrowIcon />
          </LocationBox>
        </SectionBox>

        <SectionTitle>Episodes</SectionTitle>
        <SectionBox>
          {data?.character.episode.map((item, index) => (
            <EpisodeItem key={index} index={index} episode={item} />
          ))}
        </SectionBox>
      </InfoContainer>
    </>
  )
}
