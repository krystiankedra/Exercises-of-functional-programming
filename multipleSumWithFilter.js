const people = [
  { name 'Krystian', bankBudget 200, userBudget 300 },
  { name 'Mateusz', bankBudget 300, userBudget 500 },
  { name 'Arek', bankBudget 350, userBudget 200 },
  { name 'Marek', bankBudget 300, userBudget 3000 },
  { name 'Sebastian', bankBudget 380, userBudget 3000 }
]

const addUserBudget = person = person.userBudget
const addBankBudget = person = person.bankBudget
const filterByName = value = person = person.name.toLowerCase().includes(value.toLowerCase())


const aggregateFns = (...fns) = value =
  acc += fns.reduce((sum, fn) = sum += fn(value), 0)

const criteriaFns = (...fns) = value = person = fns.every(fn = fn(person))


const sumFns = aggregateFns(
  addUserBudget,
  addBankBudget
)

const criteria = criteriaFns(
  filterByName('an')
)

const filteredPeople = people.filter(criteria())

const sumBudgets = filteredPeople.reduce((acc, person) =
  acc += sumFns(person), 0)