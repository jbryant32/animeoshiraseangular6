import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-iphone-install-screen",
  templateUrl: "./iphone-install-screen.component.html",
  styleUrls: ["./iphone-install-screen.component.css"]
})
export class IphoneInstallScreenComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  checkDeviceType(): string {
    if (/iPhone/i.test(navigator.userAgent)) {

    }
    if (/Android/i.test(navigator.userAgent)) {

    }

    return "pc";
  }
}
