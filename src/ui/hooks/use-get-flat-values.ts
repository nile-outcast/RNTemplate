import { useMemo } from 'react'

export const useGetFlatValues = (
  results: { [key: string]: string }[],
  key: string,
) =>
  useMemo(
    () =>
      [
        ...results.reduce(
          (prev, result) => (result[key] ? prev.add(result[key]) : prev),
          new Set<string>([]),
        ),
      ].sort(),
    [key, results],
  )
