import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";
import { HomeComponent } from "../home/home.component";
import { AccountComponent } from "../account/account.component";
import { by, element } from "../../../node_modules/protractor";
import * as $ from "jquery";
import { setTimeout } from "timers";
import { SwUpdate } from "../../../node_modules/@angular/service-worker";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  displayHome: string = "display:none;";
  displayAccount: string = "display:none;";
  constructor(
    private swUpdate: SwUpdate,
    private router: Router,
    private rd: Renderer2,
    private hostElement: ElementRef
  ) {}

  ngOnInit() {
    this.swUpdate
      .checkForUpdate()
      .then(() => {
        console.log("Upadte Available");
      })
      .catch(error => {
        console.log(`Update Check Error ${error}`);
      });
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          this.swUpdate
            .activateUpdate()
            .then(() => window.location.reload())
            .catch(error => {
              alert(error);
            });
        }
      });
    }
  }
  ngAfterViewInit() {}
  ngAfterContentInit() {}

  clickedHome(e) {
    document.getElementById("home").style.display = "inherit";
    document.getElementById("account").style.display = "none";
  }
  clickedAccount(e) {
    document.getElementById("home").style.display = "none";
    document.getElementById("account").style.display = "inherit";
  }
  openAccount() {}
}
