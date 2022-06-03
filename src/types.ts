import { FilterSubtitles, FilterTitles } from './enums'

export type TitleProps = {
  title: string
  isFiltered?: boolean
}

export type FilterTitleProps = {
  title: keyof typeof FilterTitles & keyof typeof FilterSubtitles
}

export type ModalMenuProps = {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}

export type SearchState = {
  results: string[] | undefined
  value: string
  setValue: (value: string) => void
  reloader: () => void
}
