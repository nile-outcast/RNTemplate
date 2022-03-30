import { useMemo } from 'react'

export const useGetFlatValues = (results: { [key: string]: string }[]) =>
  useMemo(
    () =>
      [
        ...results?.reduce(
          (prev: Set<string>, result) =>
            prev.add(result[Object.keys(result)[1]]),
          new Set<string>([]),
        ),
      ].sort(),
    [results],
  )
