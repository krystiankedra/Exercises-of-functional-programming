const people = [
    { id: 1, name: 'Krystian', bankBudget: 200, userBudget: 300 },
    { id: 2, name: 'Mateusz', bankBudget: 300, userBudget: 500 },
    { id: 3, name: 'Arek', bankBudget: 350, userBudget: 200 },
    { id: 4, name: 'Marek', bankBudget: 300, userBudget: 3000 },
    { id: 5, name: 'Sebastian', bankBudget: 380, userBudget: 3000 }
]

const sortBy = 'bankBudget'

const sortByProperty = property => (previous, next) => previous[property] > next[property] ? 1 : -1

const sortRestFn = (...fns) => (previous, next) => fns.map(fn => fn(previous, next))

const sortCriteria = sortRestFn(
    sortByProperty(sortBy)
)

const sortedArray = array => array.sort(sortCriteria)