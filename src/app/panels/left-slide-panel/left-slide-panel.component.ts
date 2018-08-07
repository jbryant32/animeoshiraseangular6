import { Component, OnInit, ViewChild, Input } from '@angular/core';
import * as $ from 'jquery';
import { HomeComponent } from '../../home/home.component';
import { SharedDataService } from '../../services/shared-data.service';
import { MovieDetailsComponent } from '../../panel-components/movie-details/movie-details.component';
import { TheaterInfoComponent } from '../../panel-components/theater-info/theater-info.component';
import { PanelEventInterface } from '../../panel-event-interface';
@Component({
  selector: 'app-left-slide-panel',
  templateUrl: './left-slide-panel.component.html',
  styleUrls: ['./left-slide-panel.component.css']
})
export class LeftSlidePanelComponent implements OnInit, PanelEventInterface {

  name: string = "left panel"
  attachedComponentInstance: any;
  panelInstance: any;
  closingComplete: Function;
  startPanelClosedEvent: Function;//call on closing click even


  private movies: Object[];
  private selectedId: String;
  private defaultMovie: Object = {
    "theaterUrl": "NA",
    "poster_sm": "https://image.tmdb.org/t/p/w200",
    "poster_md": "https://image.tmdb.org/t/p/w300",
    "poster_lg": "https://image.tmdb.org/t/p/w400",
    "poster_lgx": "https://image.tmdb.org/t/p/w500",
    "backdrop_sm": "NA",
    "backdrop_lg": "NA",
    "subbed": "NA",
    "dubbed": "NA",
    "trailer": "NA",
    "overview": "NA",
    "releaseDate": "NA",
    "theatricalRelease": "NA",
    "showings": ["09/09/1999", "09/09/1999", "09/09/1999"],
    "id": "NA",
    "title": "NA"

  };
  private selectedMovie: Object;
  private showDetails: Boolean;
  @ViewChild(MovieDetailsComponent) detailsView: MovieDetailsComponent;
  @ViewChild(TheaterInfoComponent) theaterView: TheaterInfoComponent;
  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {
  }
  //run on first initial creation of modal
  ngAfterViewInit() {
    $("#panel-main-container").animate({ "left": "0%" }, 200, () => { })

  }
  //runs if panel already initialized reopens the panel here
  reintialize() {
    $("#panel-main-container").animate({ "left": "0%" }, 200, () => { })
  }
  public openPanel(show: string) {
    // this.selectedMovie = this.sharedData.getSelectedMovie();
    // if (show === "details") {
    //   console.log("open detail")
    //   $("#panel-main-container").animate({ "left": "0%" }, 200, () => { this.showDetailsView(); })
    // }

  }
  public closePanel() {
    //TODO merge into panel event handler
    // this.detailsView.onClose();

    $("#panel-main-container").animate({ "left": "-100%" }, 200, () => { this.closingComplete(this) })
  }

}
