import { movies, getById } from "./db.js";

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => getById(id),
  },
};

export default resolvers;
