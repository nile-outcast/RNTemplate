export const getFlatValues = (
  results: { [key: string]: string }[] | undefined,
) =>
  results?.reduce(
    (prev: string[], result) =>
      prev.includes(result[Object.keys(result)[1]])
        ? prev
        : [...prev, result[Object.keys(result)[1]]],
    [],
  )
