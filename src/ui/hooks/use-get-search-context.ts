import { QueryResult } from '@apollo/client'

import { Keys, SearchState } from 'src/types'
import { useGetFlatValues, useReloader } from 'src/ui/hooks'

export const useGetSearchContext = (
  data: QueryResult,
  dataKey: Keys,
  value: string,
  setValue: (value: string) => void,
): SearchState => ({
  results: useGetFlatValues(data.data?.[dataKey].results ?? []),
  value,
  reloader: useReloader(data, dataKey),
  setValue,
})
