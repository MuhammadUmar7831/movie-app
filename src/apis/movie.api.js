import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2U5ZjU1OGQ1NTQyZTU5ZjdhYWMyNjE4M2ExMmZkMiIsIm5iZiI6MTcyOTI2OTkwNi40NDEzNjcsInN1YiI6IjY3MTI4ZmRmMjVjNzBiOGIxZDY3Y2YwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XsL6_9dfgX8wI4fwjg3i5y7oKAkV_CMTThX9laYmvu8',
  },
});

export async function getTredingMoviesApiCall(page = 1) {
  try {
    const response = await api.get(`/trending/movie/day`, {
      params: {language: 'en-US'},
    });
    return response.data;
  } catch (error) {
    return {results: null};
  }
}

export async function getTopRatedMoviesApiCall(page = 1) {
  try {
    const response = await api.get(`/movie/top_rated`, {
      params: {language: 'en-US', page: page},
    });
    return response.data;
  } catch (error) {
    return {results: null};
  }
}

export async function getPopularMoviesApiCall(page = 1) {
  try {
    const response = await api.get(`/movie/popular`, {
      params: {language: 'en-US', page: page},
    });
    return response.data;
  } catch (error) {
    return {results: null};
  }
}

export async function getMovieDetailsApiCall(movieId) {
  try {
    const response = await api.get(`/movie/${movieId}`, {
      params: {language: 'en-US'},
    });
    return response.data;
  } catch (error) {
    return {results: null};
  }
}

export async function getMovieCastApiCall(movieId) {
  try {
    const response = await api.get(`/movie/${movieId}/credits`, {
      params: {language: 'en-US'},
    });
    return response.data;
  } catch (error) {
    return {results: null};
  }
}

export async function getSimilarMoviesApiCall(movieId, page = 1) {
  try {
    const response = await api.get(`/movie/${movieId}/similar`, {
      params: {language: 'en-US', page},
    });
    return response.data;
  } catch (error) {
    return {results: null};
  }
}

export async function getPersonDetailsApiCall(personId) {
  try {
    const response = await api.get(`/person/${personId}`, {
      params: {language: 'en-US'},
    });
    return response.data;
  } catch (error) {
    return {results: null};
  }
}

export async function getPersonMoviesApiCall(personId) {
  try {
    const response = await api.get(`/person/${personId}/movie_credits`, {
      params: {language: 'en-US'},
    });
    return response.data;
  } catch (error) {
    return {results: null};
  }
}

export async function getMoviesBySearchApiCall(query, page = 1) {
  try {
    const response = await api.get(`/search/movie`, {
      params: {language: 'en-US', query, page},
    });
    return response.data;
  } catch (error) {
    return {results: null};
  }
}