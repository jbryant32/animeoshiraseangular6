import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import *  as $ from 'jquery';
import { TheaterInfoComponent } from '../../panel-components/theater-info/theater-info.component';
import { PanelEventHandlerService } from '../../services/panel-event-handler.service';
import { PanelEventInterface } from '../../panel-event-interface';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.css']
})
export class BottomPanelComponent implements OnInit, PanelEventInterface {

  name: string = "bottom panel";
  attachedComponentInstance: any;
  panelInstance: any;
  closingComplete: Function;//called when close is finished animating
  startPanelClosedEvent: Function;
  constructor(private sharedData: SharedDataService) { }


  ngOnInit() {
  }
  //open modal on creation
  ngAfterViewInit() {

    console.log("open bottom")
    $(".bottom-panel-main-container").animate({ "top": "0%" }, 200, () => { })
  }
  reintialize() {
    $(".bottom-panel-main-container").animate({ "top": "0%" }, 200, () => { })

  }
  closePanel() {
    //called closing has started
    $('.bottom-panel-main-container').animate({ top: "100%" }, 200, () => { this.closingComplete(this) });
  }

}
