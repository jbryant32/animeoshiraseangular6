import { Injectable } from '@angular/core';

@Injectable()
export class InTheatersDataService {

  constructor() { }

  public getInTheaters(movies: Object[]): Object[] {
    var inTheaters = [];
    movies.forEach((movie) => {

      var currentDate = new Date();
      var currentDay = currentDate.getDay();
      var currentMonth = currentDate.getMonth();
      var currentYear = currentDate.getFullYear();

      var movieMonth = parseInt(movie["showings"][0].split("/")[0]);
      console.log("month " + movieMonth);
      console.log("current month " + currentMonth + 1);
      if (movieMonth === currentMonth + 1)
        inTheaters.push(movie);

    });
    if (inTheaters.length === 0) {
      console.log("no movies available")
    }
    console.log(inTheaters);
    return inTheaters;
  }
}
