import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BottomPanelComponent } from '../../panels/bottom-panel/bottom-panel.component';
import { PanelEventHandlerService } from '../../services/panel-event-handler.service';
import { TheaterInfoComponent } from '../theater-info/theater-info.component';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private panelEvents: PanelEventHandlerService
    , private sharedData: SharedDataService,
    private ref: ChangeDetectorRef) { }
  theaterTitle: string = 'No Title'
  movieSummary: string = 'No Summary Available';
  englishDubbed:string = 'NA';
  japaneseDubbed:string = 'NA'
  rating:string='NA';
  showTimes: string[] = [];
  
  ngOnInit() {
  }
  ngAfterViewInit() {}
  ngAfterContentInit() { this.initView() }
  //call when view needs to be open
  private initView() {
    var selectedMovie = this.sharedData.getSelectedMovie();
    
    var youTubeIframe = document.getElementById("youtube-trailer");
 
    this.showTimes = [];
    //set link for youtube from selected movie object
    youTubeIframe.setAttribute("src", `https://www.youtube.com/embed/${selectedMovie["trailer"]}`);
    //set summary info
    this.movieSummary = selectedMovie["overview"];
    //set the inner text with the  movie showtimes 
    selectedMovie["showings"].forEach((showing) => {
    
      this.showTimes.push(showing);
    })
   
    this.theaterTitle = selectedMovie["title"];
    this.englishDubbed = selectedMovie['dubbed'];
    this.japaneseDubbed = selectedMovie['subbed']
   

  }
  //open iframe with theater url
  openTheaterUrl(e) {
   
    this.panelEvents.openPanelView(TheaterInfoComponent, BottomPanelComponent);
  }

  //take care of any closing actions here 
  public onClose() {
     
  }
}
