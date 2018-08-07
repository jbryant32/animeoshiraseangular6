import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HandleServiceWorkerEvents} from '../../handle-service-worker-events';
import {HttpServiceService} from '../../http-service.service'
import { SharedDataService } from '../../services/shared-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [HandleServiceWorkerEvents,HttpServiceService,SharedDataService]
})
export class CustomModulesModule { }
