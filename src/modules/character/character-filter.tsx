import React, { useState } from 'react'
import { ModalLine } from 'assets/images/icons'

import { FilterTitles } from 'src/types'
import { FilterCheckboxField, FilterTouchableField } from 'src/ui'
import { HeaderFilter } from 'src/ui/header-filter'
import { ModalMenu } from 'src/ui/modal'

export const CharacterFilter = () => {
  const [visible, setVisible] = useState(true)

  return (
    <ModalMenu showModal={visible} setShowModal={setVisible}>
      <ModalLine />
      <HeaderFilter title={FilterTitles.Filter} />
      <FilterTouchableField title={FilterTitles.Name} />
      <FilterTouchableField title={FilterTitles.Species} />
      <FilterCheckboxField title="Status" />
      <FilterCheckboxField title="Gender" />
    </ModalMenu>
  )
}
