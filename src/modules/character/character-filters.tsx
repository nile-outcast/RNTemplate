import React, { useState } from 'react'

import { FilterTitles } from 'src/types'
import { FilterCheckboxField, FilterTouchableField } from 'src/ui'
import { HeaderFilter, ModalMenu } from 'src/ui'

export const CharacterFilters = () => {
  const [visible, setVisible] = useState(true)

  return (
    <ModalMenu showModal={visible} setShowModal={setVisible}>
      <HeaderFilter title={FilterTitles.Filter} />
      <FilterTouchableField title={FilterTitles.Name} />
      <FilterTouchableField title={FilterTitles.Species} />
      <FilterCheckboxField title="Status" />
      <FilterCheckboxField title="Gender" />
    </ModalMenu>
  )
}
