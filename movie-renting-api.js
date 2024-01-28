class Movie {
  constructor(title, director, releaseYear, available) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.available = available;
  }
}

class MovieStore {
  constructor() {
    this.movies = [];
  }

  addMovie(title, director, releaseYear, available) {
    const movie = new Movie(title, director, releaseYear, available);
    this.movies.push(movie);
  }

  rentMovie(title) {
    const movie = this.movies.find(movie => movie.title === title);
    if (movie && movie.available) {
      movie.available = false;
      console.log(`You have successfully rented ${title}`);
    } else {
      console.log(`${title} is not available for rent`);
    }
  }

  returnMovie(title) {
    const movie = this.movies.find(movie => movie.title === title);
    if (movie && !movie.available) {
      movie.available = true;
      console.log(`You have successfully returned ${title}`);
    } else {
      console.log(`${title} is not rented`);
    }
  }

  displayMovies() {
    console.log("Available movies:");
    this.movies.forEach(movie => {
      if (movie.available) {
        console.log(`- ${movie.title} (${movie.releaseYear})`);
      }
    });
  }
}

// Create a movie store object
const store = new MovieStore();

// Add movies to the store
store.addMovie("Lord Of The Rings", "Peter Jackson", 2001, true);
store.addMovie("The Hateful Eight", "Quentin Taratino", 2015, false);
store.addMovie("Resident Evil", "Paul W. S. Anderson", 2002, true);

// Rent a movie
store.rentMovie("Lord Of The Rings");

// Return a movie
store.returnMovie("The Hateful Eight");

// Display available movies
store.displayMovies();