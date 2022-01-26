import React, { FC } from 'react'
import styled from 'styled-components/native'

import { FilterTitleProps, FilterTitles, ModalMenuProps } from 'src/types'
import { HeaderFilter, ModalMenu } from 'src/ui'

type Props = ModalMenuProps & FilterTitleProps

const ResultContainer = styled.View`
  min-height: 600px;
  border-top-width: 0.5px;
`

export const SearchModal: FC<Props> = ({ title, ...props }) => {
  return (
    <ModalMenu {...props}>
      <HeaderFilter
        title={FilterTitles[title]}
        closeModal={() => props.setShowModal(false)}
      />
      <ResultContainer />
    </ModalMenu>
  )
}
