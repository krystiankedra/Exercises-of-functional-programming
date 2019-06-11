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

const mergedArrays = people.map(chainPersonWithSkills(skills))