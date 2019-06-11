const numbers = [ [3,4], [3,5], [1,2], [3,4], [5,6], [3,2], [2,1] ]

const concatArray = (acc, val) => acc.concat(val)
const setUniqValues = array => [...new Set(array)]

const reducer = numbers.reduceRight((acc, val) => concatArray(acc, val), [])
const uniqNumbers = setUniqValues(reducer)