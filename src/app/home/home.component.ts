import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { HttpServiceService } from "../http-service.service";
import { LeftSlidePanelComponent } from "../panels/left-slide-panel/left-slide-panel.component";
import { SharedDataService } from "../services/shared-data.service";
import { NowInTheatersComponent } from "../home-subcomponents/now-in-theaters/now-in-theaters.component";
import { ComingSoonComponent } from "../home-subcomponents/coming-soon/coming-soon.component";
import { Router } from "../../../node_modules/@angular/router";
import { PanelEventInterface } from "../panel-event-interface";
import { PanelEventHandlerService } from "../services/panel-event-handler.service";
import { MovieDetailsComponent } from "../panel-components/movie-details/movie-details.component";
import { SwUpdate } from "../../../node_modules/@angular/service-worker";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public Movies: Object[];
  public Intheaters: Object[];
  public selectedMovie: Object;
  loading: boolean;
  @ViewChild(NowInTheatersComponent) nowInTheaters: NowInTheatersComponent;
  @ViewChild(ComingSoonComponent) comingSoon: ComingSoonComponent;
  constructor(
    private httpService: HttpServiceService,
    private sharedData: SharedDataService,
    private panelEventsHandler: PanelEventHandlerService,
    private router: Router,
    private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    this.loading=true;
  }

  ngAfterViewInit() {
    this.httpService.Init();
    this.httpService.fetchMoviesCallBack = () => {
      this.Movies = this.sharedData.getMovies();
    setTimeout(()=>{  this.loading = false},3000);
    };
  }
  public populateNowInTheaters(e) {
    this.nowInTheaters.Init(); //reference to left panel need for users selecting a movie pulls out panel
    console.log("open now in theaters");
  }
  public populateComingSoon(e) {
    this.comingSoon.init();
  }
  //event run on dom  when user selects a movie
  public openDetails(e) {
    this.sharedData.setSelectedMovie(e.target.parentElement.id);
    //this.leftPanel.openPanel("details");
    this.panelEventsHandler.openPanelView(
      MovieDetailsComponent,
      LeftSlidePanelComponent
    );
  }
  public closeDetails() {
    // this.leftPanel.closePanel();
  }
  onPressUp(e) {
    console.log(e);
  }
  swipeLeft(e) {
    var firstCategory = document.getElementById("AtoZ");
    var highlighterForSelect = document.getElementById("selection-highlighter");
    console.log("left");
    console.log(firstCategory.style.left);
    if (firstCategory.style.left === "") {
      firstCategory.style.left = "0%";
    }
    if (firstCategory.style.left === "200%") {
      //slide to showing this month
      this.nowInTheaters.Init();
      highlighterForSelect.style.left = "35%";
      firstCategory.style.left = "100%";
      return;
    }
    if (firstCategory.style.left === "100%") {
      console.log(firstCategory.style.left);
      //slide to coming soon
      firstCategory.style.left = "0%";
      highlighterForSelect.style.left = "70%";
      this.comingSoon.init();
      return;
    }
  }
  swipeRight(e) {
    console.log("swpie right");

    var firstCategory = document.getElementById("AtoZ");
    var highlighterForSelect = document.getElementById("selection-highlighter");
    console.log(firstCategory.style.left);
    if (firstCategory.style.left === "0%" || firstCategory.style.left === "") {
      console.log("showing this month");
      this.nowInTheaters.Init();
      highlighterForSelect.style.left = "35%";
      //slide to showing this month
      firstCategory.style.left = "100%";
      return;
    }
    if (firstCategory.style.left === "100%") {
      //slide to coming soon
      this.comingSoon.init();
      firstCategory.style.left = "200%";
      highlighterForSelect.style.left = "0%";
      return;
    }
  }
}
