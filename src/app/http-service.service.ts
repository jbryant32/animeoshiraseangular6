import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';import { SharedDataService } from './services/shared-data.service';

@Injectable()
export class HttpServiceService {

  private url: string = "https://animeoshirasev2.azurewebsites.net/api/v1/allMovies";
  constructor(private _http: Http, private sharedData: SharedDataService) { }
  private moviesDatabase: Object[] = [];
  public fetchMoviesCallBack:Function;

  Init() {
    this.getAllMovies();
  }
  private getAllMovies() {

    this._http.get(this.url).pipe(map((item) => {

      const json = item.json();
      return json;

    })).subscribe((success: [any]) => {
      success.map((item) => {

        if(item["showings"][0] === "09/09/1999"){

          item["showings"] =["See Theater Link For ShowTimes"]
        }
        if(item["releaseDate"] === "01/01/2001"){
          console.log(item)
          item["showings"] =["Coming Soon"]
        }
        var movie = {
          "theaterUrl": item["theaterUrl"],
          "poster_sm": "https://image.tmdb.org/t/p/w200" + item["poster_sm"],
          "poster_md": "https://image.tmdb.org/t/p/w300" + item["poster_md"],
          "poster_lg": "https://image.tmdb.org/t/p/w400" + item["poster_lg"],
          "poster_lgx": "https://image.tmdb.org/t/p/w500" + item["poster_lgx"],
          "backdrop_sm": item["backdrop_sm"],
          "backdrop_md": item["backdrop_md"],
          "backdrop_lg": item["backdrop_lg"],
          "subbed": item["subbed"],
          "dubbed": item["dubbed"],
          "trailer": item["trailer"],
          "overview": item["overview"],
          "releaseDate": item["releaseDate"],
          "theatricalRelease": item["theatricalRelease"],
          "showings": item["showings"],
          "id": item["id"],
          "title": item["title"]

        }
        this.moviesDatabase.push(movie);
        return movie;
      });

      this.sharedData.setMovies(this.moviesDatabase);
      this.fetchMoviesCallBack();

    })
  }
}
