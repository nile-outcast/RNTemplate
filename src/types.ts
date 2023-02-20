import { FilterSubtitles, FilterTitles } from './enums'

export type TitleProps = {
  title: string
  isFiltered?: boolean
}

export type ModalHeaderProps = TitleProps &
  Partial<{
    closeModal: () => void
    onClean: () => void
    onApply: () => void
  }>

export type FilterTitleProps = {
  title: keyof typeof FilterTitles & keyof typeof FilterSubtitles
}

export type ModalMenuProps = {
  showModal: boolean
  closeModal: () => void
}

export type SearchState = {
  results: string[] | undefined
  value: string
  setValue: (value: string) => void
  reloader: () => void
}

export type DataKeys = 'characters' | 'locations' | 'episodes'
