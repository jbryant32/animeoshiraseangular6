import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CustomModulesModule } from "./mymodules/custom-modules/custom-modules.module";
import { LeftSlidePanelComponent } from "./panels/left-slide-panel/left-slide-panel.component";
import { MovieDetailsComponent } from "./panel-components/movie-details/movie-details.component";
import { TheaterInfoComponent } from "./panel-components/theater-info/theater-info.component";
import { NowInTheatersComponent } from "./home-subcomponents/now-in-theaters/now-in-theaters.component";
import { IphoneInstallScreenComponent } from "./iphone-install-screen/iphone-install-screen.component";
import { AndroidInstallScreenComponent } from "./android-install-screen/android-install-screen.component";
import { BottomPanelComponent } from "./panels/bottom-panel/bottom-panel.component";
import { ComingSoonComponent } from "./home-subcomponents/coming-soon/coming-soon.component";
import { AccountComponent } from "./account/account.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./account-subcomponents/login/login.component";
import { CreateAccountComponent } from "./account-subcomponents/create-account/create-account.component";
import { PanelEventHandlerService } from "./services/panel-event-handler.service";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { AdsenseModule } from "ng2-adsense";
import { HammertimeDirective } from "./hammertime.directive";
import * as Hammer from "hammerjs";
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { InstallscreenComponent } from "./installscreen/installscreen.component";
import { ActivateGuard } from "./activate.guard";
import { ActivateCheckService } from "./activate-check.service";
import { UnsupportedComponent } from './unsupported/unsupported.component';
import { WorkingComponent } from './working/working.component';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pinch: { enable: false },
    rotate: { enable: false },
    pan: { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftSlidePanelComponent,
    MovieDetailsComponent,
    TheaterInfoComponent,
    NowInTheatersComponent,
    IphoneInstallScreenComponent,
    AndroidInstallScreenComponent,
    BottomPanelComponent,
    ComingSoonComponent,
    AccountComponent,
    MainComponent,
    LoginComponent,
    CreateAccountComponent,
    HammertimeDirective,
    InstallscreenComponent,
    UnsupportedComponent,
    WorkingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    AdsenseModule.forRoot({
      adClient: "ca-pub-1922276269568764",
      pageLevelAds: true
    }),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    CustomModulesModule,

    RouterModule.forRoot([
      {
        path:"",
        component:MainComponent
      },
      {
        path: "main",
        component: MainComponent,
        canActivate: [ActivateGuard]
      },
      {
        path: "install",
        component: InstallscreenComponent
      }
    ]),

    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [
    PanelEventHandlerService,
    ActivateCheckService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  entryComponents: [
    BottomPanelComponent,
    LeftSlidePanelComponent,
    MovieDetailsComponent,
    TheaterInfoComponent,
    LoginComponent,
    CreateAccountComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
//TODO Major Refactoring needed in Home.ts output an event emitter for sliding left and right
//TODO create seperate component for Home top Nav buttonss
