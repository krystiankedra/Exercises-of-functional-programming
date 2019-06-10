### Multiple sum functions example:

```
const people = [
  { name: 'Krystian', bankBudget: 200, userBudget: 300 },
  { name: 'Mateusz', bankBudget: 300, userBudget: 500 },
  { name: 'Arek', bankBudget: 350, userBudget: 200 },
  { name: 'Marek', bankBudget: 300, userBudget: 3000 },
  { name: 'Sebastian', bankBudget: 380, userBudget: 3000 }
]

const addUserBudget = person => person.userBudget
const addBankBudget = person => person.bankBudget

const aggregateFns = (...fns) => (acc, value) =>
  acc += fns.reduce((sum, fn) => sum += fn(value), 0)

const sumFns = aggregateFns(
  addUserBudget,
  addBankBudget
)

const sumBudgets = people.reduce((acc, person) =>
  sumFns(acc, person), 0)

console.log(sumBudgets)
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

### Merging two arrays

```
const people = [
  { id: 1, name: 'Krystian', bankBudget: 200, userBudget: 300 },
  { id: 2, name: 'Mateusz', bankBudget: 300, userBudget: 500 },
  { id: 3, name: 'Arek', bankBudget: 350, userBudget: 200 },
  { id: 4, name: 'Marek', bankBudget: 300, userBudget: 3000 },
  { id: 5, name: 'Sebastian', bankBudget: 380, userBudget: 3000 }
]

const skills = [
  { id: 1, skills: ['vue', 'nuxt'] },
  { id: 2, skills: ['vue', 'sass'] },
  { id: 3, skills: ['angularjs', 'nuxt'] },
  { id: 4, skills: ['vue', 'angular'] },
  { id: 5, skills: ['vue', 'react'] }
]

const setPersonSkills = person => skill => {
  if (person.id === skill.id) person.skills = skill.skills
}

const findEqualId = (skills, person) => skills.find(setPersonSkills(person))

const chainPersonWithSkills = skills => person => {
  findEqualId(skills, person)
  return person
}

const result = people.map(chainPersonWithSkills(skills))

console.log(result)
```
