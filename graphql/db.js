let movies = [
  {
    id: 0,
    name: "Jason's horror movie",
    score: 30,
  },
  {
    id: 1,
    name: "Amy's cute movie",
    score: 80,
  },
  {
    id: 2,
    name: "Linto's dog movie",
    score: 99,
  },
  {
    id: 3,
    name: "Sujin's mom movie",
    score: 98,
  },
];

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const getMovies = () => movies;

export const deleteMovie = id => {
  const otherMovies = movies.filter(movie => movie.id !== id);
  console.log("movie", movies, "others", otherMovies);
  if (movies.length > otherMovies.length) {
    movies = otherMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
