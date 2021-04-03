const roundedArray = (array: number[], denominator: number) => {
  const arrayTotal = array.reduce((a, b) => a + b)

  const sortedArray = array.map((e, i) => {
    const value = (e / arrayTotal) * denominator;
    const floor = Math.floor(value)
    return {
      floor: floor,
      remainder: Math.round((value - Math.floor(value)) * 10000) / 10000,
      index: i
    }
  }).sort((a, b) => b.remainder - a.remainder)

  const floorSum = sortedArray.reduce((a, b) => a + b.floor, 0)
  for (let i = 0; i < denominator - floorSum; i++) {
    sortedArray[i].floor++;
  }

  return sortedArray.sort((a, b) => a.index - b.index).map(e => e.floor)
}

export { roundedArray };