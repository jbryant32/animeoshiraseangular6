import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {

  constructor() { }
  private movies: Object[]
  private selectedMovie: Object;
  public setMovies(movies: Object[]) {
    this.movies = movies;
  }
  public setSelectedMovie(id: string) {
    this.movies.forEach((movie) => {
      if (movie["id"].toString() === id) {
        this.selectedMovie = movie;
      }
    });
  }
  public getMovies(): Object[] {
    var moviesFiltered = this.movies.filter((movie)=>{

      if(movie["releaseDate"] !== "01/01/2001")
      {

        return movie;
      }

    })
    return moviesFiltered;
  }
  public getComingSoon()
  {
    var moviesFiltered = this.movies.filter((movie)=>{
      if(movie["releaseDate"] === "01/01/2001")
      {

        return movie;
      }
    })
    return moviesFiltered;
  }
  public getSelectedMovie(){
    return this.selectedMovie;
  }
}
