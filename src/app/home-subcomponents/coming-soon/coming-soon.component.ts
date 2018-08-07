import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  comingSoon: Object[] = [];
  trailerURL: string;
  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {
    console.log("on init")
  }
  ngAfterViewInit() {
    
  }
  public openTrailer(e) {
    var trailerUrl = e.target.id;
    var _thisEle = e.target.parentElement;
    
    if ($(_thisEle).css('height') != '45px')//then container is open
    {
      $(_thisEle).animate({ "height": "45px" }, 200, () => {
        this.trailerURL = 'https://www.youtube.com/embed/';
        document.getElementById( e.target.parentElement.parentElement.id).getElementsByTagName('iframe')[0].removeAttribute('src')
      })
     
    }
    else {
      $(_thisEle).animate({ "height": "80%" }, 200, () => {
        console.log(' movie container height')
        this.trailerURL = `https://www.youtube.com/embed/${trailerUrl}`;
        document.getElementById( e.target.parentElement.parentElement.id).getElementsByTagName('iframe')[0].setAttribute('src',this.trailerURL);
      })
     
    }
  }
  public init() {
    this.comingSoon = this.sharedData.getComingSoon();

  }
}
