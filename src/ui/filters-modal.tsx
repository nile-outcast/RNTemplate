import React, { FC } from 'react'

import { FilterTitles } from 'src/enums'
import { ModalHeaderProps, ModalMenuProps } from 'src/types'

import { ModalMenu } from './modal'
import { ModalHeader } from './modal-header'

type Props = ModalMenuProps & Omit<ModalHeaderProps, 'title'>

export const FiltersModal: FC<Props> = ({ children, ...props }) => {
  return (
    <ModalMenu {...props}>
      <ModalHeader {...props} title={FilterTitles.Filter} />
      {children}
    </ModalMenu>
  )
}
