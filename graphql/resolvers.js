import { getMovies, getById } from "./db.js";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
};

export default resolvers;
