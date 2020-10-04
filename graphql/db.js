export const people = [
  {
    id: "0",
    name: "Jason",
    age: 33,
    gender: "-",
  },
  {
    id: "1",
    name: "Amy",
    age: 29,
    gender: "Female",
  },
  {
    id: "2",
    name: "Lulu",
    age: 6,
    gender: "meow",
  },
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
