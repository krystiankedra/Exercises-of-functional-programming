const people = [
  { name: 'Krystian', bankBudget: 200, userBudget: 300 },
  { name: 'Mateusz', bankBudget: 300, userBudget: 500 },
  { name: 'Arek', bankBudget: 350, userBudget: 200 },
  { name: 'Marek', bankBudget: 300, userBudget: 3000 },
  { name: 'Sebastian', bankBudget: 380, userBudget: 3000 }
]

const searchedPhrase = 'an'
const searchedAmount = 300

const addBankBudget = person => person.bankBudget
const addUserBudget = person => person.userBudget
const filterByName = condition => person => person.name.toLowerCase().includes(condition.toLowerCase())
const filterByBankBudget = condition => person => person.bankBudget >= condition

const aggregateFns = (...fns) => person =>
  fns.reduce((sum, fn) => sum += fn(person), 0)

const criteriaFns = (...fns) => condition =>
  fns.every(fn => fn(condition))

const filterFns = criteriaFns(
  filterByName(searchedPhrase),
  filterByBankBudget(searchedAmount)
)

const sumFns = aggregateFns(
  addBankBudget,
  addUserBudget
)

const filteredPeople = people.filter(filterFns)

const calculatedBudgets = filteredPeople.reduce((acc, person) => acc += sumFns(person), 0)