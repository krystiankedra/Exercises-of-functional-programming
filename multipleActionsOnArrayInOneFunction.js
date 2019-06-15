const people = [
  { name: 'Krystian', bankBudget: 200, userBudget: 300 },
  { name: 'Mateusz', bankBudget: 300, userBudget: 500 },
  { name: 'Arek', bankBudget: 350, userBudget: 200 },
  { name: 'Marek', bankBudget: 300, userBudget: 3000 },
  { name: 'Sebastian', bankBudget: 380, userBudget: 3000 }
]

const searchedPhrase = 'an'
const userBudgetIsMoreThan = 500
const bankBudgetIsMoreThan = 250
const multplyValue = 5;
const addValue = 1000

const multiplyBankBudget = value => person => {
  person.bankBudget *= value
  return person
}

const addUserBudget = value => person => {
  person.userBudget += value
  return person
}

const filterByName = condition => person => person.name.toLowerCase().includes(condition.toLowerCase())
const filterByUserBudget = condition => person => person.userBudget > condition
const filterByBankBudget = condition => person => person.bankBudget > condition

const actionFns = (...fns) => person => fns.every(fn => fn(person))

const pipe = actionFns(
  filterByName(searchedPhrase),
  filterByUserBudget(userBudgetIsMoreThan),
  filterByBankBudget(bankBudgetIsMoreThan),
  multiplyBankBudget(multplyValue),
  addUserBudget(addValue)
)

const result = people.filter(pipe)