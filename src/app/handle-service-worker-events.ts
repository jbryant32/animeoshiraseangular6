import { Injectable } from '@angular/core';

@Injectable()
export class HandleServiceWorkerEvents {
    constructor() {
        console.log("handleservice worker")
         navigator.serviceWorker.addEventListener("install", () => { 
            this.eventinstallPromise = new Promise((success,fail)=>{
                success("install ok")
            })
            console.log("..Installing")
        });
          navigator.serviceWorker.addEventListener("push", () => {alert()});
        
    }
    
    public eventinstallPromise;
    public eventPushPromoise;
}
