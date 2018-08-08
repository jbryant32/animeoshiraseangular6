import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivateCheckService {

  constructor() { }

  public appInstalled():boolean{
    if(!environment.production){
      console.log("not production")
      return true;
    }
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log("app   installed")
      return true;
    }
    else{
      console.log("app not installed")
      return false;
    }

  }
}
