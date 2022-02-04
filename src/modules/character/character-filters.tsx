import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'

import { characterInitialState, useRootStore } from 'src/store'
import { FilterTitles, ModalMenuProps } from 'src/types'
import { FilterCheckboxField, FilterTouchableField } from 'src/ui'
import { HeaderFilter, ModalMenu } from 'src/ui'

import { CheckboxTitles } from './types'

export const CharacterFilters: FC<ModalMenuProps> = observer((props) => {
  const {
    characterStore: { params, isFiltered, setParams },
  } = useRootStore()

  const [localParams, setLocalePrarams] = useState(params)
  const [localIsFiltered, setLocaleIsFiltered] = useState(isFiltered)

  const onClean = () => {
    setLocaleIsFiltered(false)
    setLocalePrarams(characterInitialState)
  }

  const onApply = () => {
    props.setShowModal(false)
    setParams(localParams, localIsFiltered)
  }

  const setStatus = (value: string) => {
    setLocaleIsFiltered(true)
    setLocalePrarams({ ...localParams, status: value })
  }

  const setGender = (value: string) => {
    setLocaleIsFiltered(true)
    setLocalePrarams({ ...localParams, gender: value })
  }

  return (
    <ModalMenu {...props}>
      <HeaderFilter
        title={FilterTitles.Filter}
        isFiltered={isFiltered}
        onClean={onClean}
        onApply={onApply}
      />

      <FilterTouchableField title={FilterTitles.Name} />

      <FilterTouchableField title={FilterTitles.Species} />

      <FilterCheckboxField
        title={CheckboxTitles.Status}
        value={localParams.status}
        setValue={setStatus}
      />

      <FilterCheckboxField
        title={CheckboxTitles.Gender}
        value={localParams.gender}
        setValue={setGender}
      />
    </ModalMenu>
  )
})
