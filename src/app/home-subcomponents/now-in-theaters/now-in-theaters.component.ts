import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { SharedDataService } from "../../services/shared-data.service";
import { HomeComponent } from "../../home/home.component";
import { LeftSlidePanelComponent } from "../../panels/left-slide-panel/left-slide-panel.component";
import { PanelEventHandlerService } from "../../services/panel-event-handler.service";
import { MovieDetailsComponent } from "../../panel-components/movie-details/movie-details.component";

@Component({
  selector: "app-now-in-theaters",
  templateUrl: "./now-in-theaters.component.html",
  styleUrls: ["./now-in-theaters.component.css"]
})
export class NowInTheatersComponent implements OnInit {
  public inTheaters: Object[] = [];
  public noMoviesCurrentlyPlaying: Boolean;
  private months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  currentMonth: string;
  constructor(
    private sharedData: SharedDataService,
    private panelEventHandler: PanelEventHandlerService
  ) {}

  ngOnInit() {
    this.currentMonth = this.months[(new Date().getMonth())];
  }

  public Init() {
    this.inTheaters = [];
    this.sharedData.getMovies().forEach(movie => {
      var currentDate = new Date();
      var currentDay = currentDate.getDay();
      var currentMonth = currentDate.getMonth();
      var currentYear = currentDate.getFullYear();

      var movieMonth = parseInt(movie["showings"][0].split("/")[0]);

      if (movieMonth === currentMonth + 1) this.inTheaters.push(movie);
    });
    if (this.inTheaters.length === 0) {
      console.log("no movies available");
    }
  }
  public openDetails(e) {
    this.sharedData.setSelectedMovie(e.target.parentElement.id);
    this.panelEventHandler.openPanelView(
      MovieDetailsComponent,
      LeftSlidePanelComponent
    );
  }
}
