## Multiple Sum Functions example:

```
const people = [
  { name: 'Krystian', age: 25, amount: 300 },
  { name: 'Mateusz', age: 30, amount: 500 },
  { name: 'Arek', age: 35, amount: 200 },
  { name: 'Marek', age: 30, amount: 3000 },
  { name: 'Sebastian', age: 38, amount: 3000 }
]

const addAmount = person => person.amount
const addAge = person => person.age

const aggregateFns = (...fns) => (acc, value) =>
  acc += fns.reduce((sum, fn) => sum += fn(value), 0)

const selectedSumFns = aggregateFns(
  addAmount,
  addAge
)

const result = people.reduce((acc, person) =>
  selectedSumFns(acc, person), 0)

console.log(result)
```
