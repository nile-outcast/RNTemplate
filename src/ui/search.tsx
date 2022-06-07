import React, { useCallback, useEffect, useState } from 'react'
import Voice, { SpeechResultsEvent } from '@react-native-voice/voice'
import { ActionIcon, SearchIcon } from 'assets/images/icons'
import styled from 'styled-components/native'

import { useSearchContex } from 'src/modules/search-context'
import { colors } from 'src/theme/colors'

const SeachBox = styled.View`
  flex-direction: row;
  align-items: center;
  height: 36px;
  padding: 0 10px;
  margin: 8.5px 16px;
  background-color: ${colors.gray[4]};
  border-radius: 10px;
`
const Input = styled.TextInput`
  flex: 1;
  padding: 0 7px;
`

const enum SearchStatus {
  Search = 'Search',
  Say = 'Say something...',
  Wrong = 'Something wrong. Try again.',
}

export const Search = () => {
  const { value, setValue } = useSearchContex()

  const [status, setStatus] = useState<Partial<SearchStatus>>(
    SearchStatus.Search,
  )

  const onSpeechStart = () => {
    setStatus(SearchStatus.Say)
  }

  const onSpeechEnd = () => {
    setStatus(SearchStatus.Search)
  }

  const onSpeechError = () => {
    setStatus(SearchStatus.Wrong)
  }

  const onSpeechResults = useCallback(
    (e: SpeechResultsEvent) => {
      setValue && setValue(e.value ? e.value[0] : '')
    },
    [setValue],
  )

  useEffect(() => {
    const initVoice = async () => {
      Voice.onSpeechStart = onSpeechStart
      Voice.onSpeechEnd = onSpeechEnd
      Voice.onSpeechError = onSpeechError
      Voice.onSpeechResults = onSpeechResults

      return () => Voice.destroy().then(Voice.removeAllListeners)
    }

    initVoice()
  }, [onSpeechResults])

  const startRecognizing = () => {
    setValue && setValue('')
    Voice.start('en-US')
  }

  return (
    <SeachBox>
      <SearchIcon />
      <Input
        value={value}
        onChangeText={(text) => setValue && setValue(text)}
        placeholder={status}
      />
      <ActionIcon onPress={startRecognizing} />
    </SeachBox>
  )
}
