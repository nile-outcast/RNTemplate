import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const ImagesContainer = styled.View`
  height: 150px;
  background-color: ${colors.gray[5]};
`
const BackgroundImage = styled.Image`
  width: auto;
  height: 80px;
`
const ImageBox = styled.View`
  position: absolute;
  top: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: ${colors.gray[5]};
`
const Image = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 65px;
`
const InfoBox = styled.View`
  align-items: center;
  padding: 20px;
  background-color: ${colors.gray[5]};
`
const PreTitleText = styled.Text`
  font-size: 11px;
  line-height: 13px;
  color: ${colors.gray[6]};
`
const TitleText = styled.Text`
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
`
const SubTitleText = styled.Text`
  font-weight: 900;
  font-size: 13px;
  line-height: 18px;
  color: ${colors.gray[0]};
`

type Props = {
  image?: string
  preTitle: string
  subTitle: string
  title: string
}

export const DetailsTitle = ({ image, preTitle, subTitle, title }: Props) => (
  <View>
    {image && (
      <ImagesContainer>
        <BackgroundImage
          source={require('assets/images/title-background-image.png')}
        />
        <ImageBox>
          <Image source={{ uri: image }} />
        </ImageBox>
      </ImagesContainer>
    )}

    <InfoBox>
      <PreTitleText>{preTitle}</PreTitleText>
      <TitleText>{title}</TitleText>
      <SubTitleText>{subTitle}</SubTitleText>
    </InfoBox>
  </View>
)
