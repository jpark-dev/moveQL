const jason = {
  name: "Jason",
  age: 33,
  gender: "-",
};

const resolvers = {
  Query: {
    person: () => jason,
  },
};

export default resolvers;
