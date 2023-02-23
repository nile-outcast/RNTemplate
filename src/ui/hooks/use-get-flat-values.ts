import { useMemo } from 'react'

export const useGetFlatValues = (
  results: { [key: string]: string }[],
  key: string,
) =>
  useMemo(
    () =>
      [
        ...results.reduce(
          (prev, result) => prev.add(result[key]),
          new Set<string>([]),
        ),
      ].sort(),
    [key, results],
  )
