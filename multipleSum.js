
const people = [
  { name: 'Krystian', bankBudget: 200, userBudget: 300 },
  { name: 'Mateusz', bankBudget: 300, userBudget: 500 },
  { name: 'Arek', bankBudget: 350, userBudget: 200 },
  { name: 'Marek', bankBudget: 300, userBudget: 3000 },
  { name: 'Sebastian', bankBudget: 380, userBudget: 3000 }
]

const addUserBudget = person => person.userBudget
const addBankBudget = person => person.bankBudget

const aggregateFns = (...fns) => value =>
  fns.reduce((sum, fn) => sum += fn(value), 0)

const sumFns = aggregateFns(
  addUserBudget,
  addBankBudget
)

const sumBudgets = people.reduce((acc, person) =>
  acc += sumFns(person), 0)