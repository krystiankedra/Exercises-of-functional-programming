## Multiple sum functions example:

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


### Multple filter functions example:

```
const people = [
  { name: 'Krystian', age: 25, amount: 300 },
  { name: 'Mateusz', age: 30, amount: 500 },
  { name: 'Arek', age: 35, amount: 200 },
  { name: 'Marek', age: 30, amount: 3000 },
  { name: 'Sebastian', age: 38, amount: 3000 }
]

const phrase = 'an',
  searchedAge = 30,
  searchedAmount = 3000

const filterByName = value => person => person.name.toLowerCase().includes(value.toLowerCase())
const filterByAge = value => person => person.age >= value
const filterByAmount = value => person => person.amount >= value

const conditionsFns = (...fns) => value => fns.every(fn => fn(value))

const criteria = conditionsFns(
  filterByName(phrase),
  filterByAge(searchedAge),
  filterByAmount(searchedAmount)
)

const filteredPeople = people.filter(criteria)

console.log(filteredPeople)
```
