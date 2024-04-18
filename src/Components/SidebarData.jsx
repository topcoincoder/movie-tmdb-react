const baseURL_START = "https://api.themoviedb.org/3/discover/movie?with_genres="
const baseURL_END = "&sort_by=popularity.desc&api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page="

export const SidebarData = [
  // {
  //   title: 'Trending',
  //   url: 'https://api.themoviedb.org/3/trending/movie?api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&sort_by=vote_average.desc&page=',
  // },
  {
    title: 'Popular',
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&sort_by=vote_average.desc&page=',
  },
  {
    title: 'R Rated',
    url: 'https://api.themoviedb.org/3/discover/movie/?api_key=df032f0bbf7881c7e18f93539c8a73ba&certification_country=US&certification=R&sort_by=vote_average.desc&page=',
  },
  {
    title: 'Kids',
    url: baseURL_START + '10751' + baseURL_END,
  },
  {
    title: 'Dramas',
    url: baseURL_START + '18' + baseURL_END,
  },
  {
    title: 'Comedies',
    url: baseURL_START + '35' + baseURL_END,
  },
  {
    title: 'Action',
    url: baseURL_START + '28' + baseURL_END,
  },
  {
    title: 'Adventure',
    url: baseURL_START + '12' + baseURL_END,
  },
  {
    title : 'Animation',
    url: baseURL_START + '16' + baseURL_END,
  },
  {
    title: 'Crime',
    url: baseURL_START + '80' + baseURL_END,
  },
  {
    title: 'Documentary',
    url: baseURL_START + '99' + baseURL_END,
  },
  {
    title: 'Drama',
    url: baseURL_START + '18' + baseURL_END,
  },
  {
    title: 'Family',
    url: baseURL_START + '10751' + baseURL_END,
  },
  {
    title: 'Fantasy',
    url: baseURL_START + '14' + baseURL_END,
  },
  {
    title: 'History',
    url: baseURL_START + '36' + baseURL_END,
  },
  {
    title: 'Horror',
    url: baseURL_START + '27' + baseURL_END,
  },
  {
    title: 'Music',
    url: baseURL_START + '10402' + baseURL_END,
  },
  {
    title: 'Mystery',
    url: baseURL_START + '9648' + baseURL_END,
  },
  {
    title: 'Romance',
    url: baseURL_START + '10749' + baseURL_END,
  },
  {
    title: 'Sci-Fi',
    url: baseURL_START + '878' + baseURL_END,
  },
  {
    title: 'TV Movie',
    url: baseURL_START + '10770' + baseURL_END,
  },
  {
    title: 'Thriller',
    url: baseURL_START + '53' + baseURL_END,
  },
  {
    title: 'War',
    url: baseURL_START + '10752' + baseURL_END,
  },
  {
    title: 'Western',
    url: baseURL_START + '37' + baseURL_END,
  },

];



// Genres and their code 

// Action           28
  
// Adventure    12

// Animation    16

// Comedy      35
  
// Crime      80  

// Documentary    99

// Drama      18

// Family      10751

// Fantasy      14

// History      36

// Horror      27

// Music      10402

// Mystery      9648

// Romance      10749

// Science Fiction    878

// Thriller    53  

// TV Movie    10770

// War      10752

// Western                  37


// Sample API Request

// https://api.themoviedb.org/3/discover/movie?with_genres={CODE}&sort_by=vote_average.desc&api_key={API_KEY}&language=en-US&page=1