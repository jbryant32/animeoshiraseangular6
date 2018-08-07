import { Component, OnInit, ViewChild } from '@angular/core';
import { BottomPanelComponent } from '../panels/bottom-panel/bottom-panel.component';
import { PanelEventHandlerService } from '../services/panel-event-handler.service';
import { LoginComponent } from '../account-subcomponents/login/login.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild(BottomPanelComponent) bottomPanel: BottomPanelComponent;
  constructor(private panelEventHandler: PanelEventHandlerService) { }

  ngOnInit() {
  }
  openLogin(e) {
    this.panelEventHandler.openPanelView(LoginComponent, BottomPanelComponent);
  }
  openCreateAccount(e) {

  }
}
