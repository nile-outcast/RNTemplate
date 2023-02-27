import type { QueryResult } from '@apollo/client'

import type { DataKeys, SearchState } from 'src/types'
import { useGetFlatValues, useReloader } from 'src/ui/hooks'

export const useGetSearchContext = (
  data: QueryResult,
  dataKey: DataKeys,
  value: string,
  setValue: (value: string) => void,
): SearchState => ({
  results: useGetFlatValues(
    data.data?.[dataKey].results ?? [],
    Object.keys(data.variables ?? {})[0],
  ),
  value,
  reloader: useReloader(data, dataKey),
  setValue,
})
