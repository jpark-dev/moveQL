import { people } from "./db.js";

const resolvers = {
  Query: {
    people: () => people,
  },
};

export default resolvers;
