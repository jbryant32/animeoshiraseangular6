import { Component, OnInit } from '@angular/core';
import { ActivateCheckService } from '../activate-check.service';

@Component({
  selector: 'app-installscreen',
  templateUrl: './installscreen.component.html',
  styleUrls: ['./installscreen.component.css']
})
export class InstallscreenComponent implements OnInit {

  constructor(private _activateCheck:ActivateCheckService) { }

  ngOnInit() {
  }

}
