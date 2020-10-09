export const movies = [
  {
    id: "0",
    name: "Jason's horror movie",
    score: 30,
  },
  {
    id: "1",
    name: "Amy's cute movie",
    score: 80,
  },
  {
    id: "2",
    name: "Linto's dog movie",
    score: 99,
  },
  {
    id: "3",
    name: "Sujin's mom movie",
    score: 98,
  },
];

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === String(id));
  return filteredMovie[0];
};

export const getMovies = () => movies;

export const deleteMovie = id => {
  const otherMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > otherMovies.length) {
    movies = otherMovies;
    return true;
  } else {
    return false;
  }
};
