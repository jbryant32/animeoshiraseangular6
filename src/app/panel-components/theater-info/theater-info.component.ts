import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { DomSanitizer } from '../../../../node_modules/@angular/platform-browser';
import * as $ from 'jquery';
@Component({
  selector: 'app-theater-info',
  templateUrl: './theater-info.component.html',
  styleUrls: ['./theater-info.component.css']
})
export class TheaterInfoComponent implements OnInit {

  constructor(private sharedData: SharedDataService, private sanitizer: DomSanitizer) {
    
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    var url  = this.sharedData.getSelectedMovie()['theaterUrl']
    var movieUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url+"?device=mobile");
    $("#site-loader").html(`<object data="${url}" />`)
    $("object").ready(()=>{
      $("object")
    .css("width","100%")
    .css("height","100%");
    $("#site-loader")
    .css("overflow-y","scroll")
    .css("-webkit-overflow-scrolling","touch")
     
  });
  
  }
   
}
