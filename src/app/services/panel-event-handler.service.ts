import { Injectable } from '@angular/core';
import { Component, OnInit, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef, Renderer2, ElementRef } from '@angular/core';
import *  as $ from 'jquery';
import { BottomPanelComponent } from '../panels/bottom-panel/bottom-panel.component';
import { TheaterInfoComponent } from '../panel-components/theater-info/theater-info.component';
import { PanelEventInterface } from '../panel-event-interface';
import { ElementAst } from '../../../node_modules/@angular/compiler';
@Injectable()
export class PanelEventHandlerService {

  instantiantedPanels: any[] = [];

  panelElement;
  panelInnerViewElement;
  constructor(
    private componetFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef

  ) {

  }

  public openPanelView(componentToAttach: any, panelToOpen: any) {
    var isPanel = this.panelCheck(panelToOpen);
    if (isPanel === false) {
      this.createPanel(panelToOpen, componentToAttach)

    }
    else {
      this.reintializePanel(panelToOpen, componentToAttach);
    }
  
  }

  //check if panel has been instantiated already
  panelCheck(panelComp: any) {

    var alreadyInstantiated = this.instantiantedPanels.find((panelItem) => {

      return panelItem instanceof panelComp

    });

    if (alreadyInstantiated) {
      console.log("panel is in list")
      return true
    }
    else {
      console.log("nothin in list sir")
      return false;
    }
  }
  // re init panel
  reintializePanel(panelToOpen: any, componentToAttach: any) {
    this.instantiantedPanels.find((panelItem) => {
    //find the panel thats already been created and re intialize its position and re attach a new view compoonet 
    //to its instances thats been save in the propery panelInstance  
      if (panelItem instanceof panelToOpen) {
        (panelItem as PanelEventInterface).attachedComponentInstance = this.reAttachViewComponent(componentToAttach, panelItem.panelInstance);
        (panelItem as PanelEventInterface).reintialize();
        return true;
      }
    });
  }
  //re attach a new view component to the panel movie-detials/theater-info/login/create-account
  reAttachViewComponent(viewComponent: any, instantiatedPanel: any) {
    //create the view component
    var panelviewcomponent = this.componetFactoryResolver
      .resolveComponentFactory(viewComponent)
      .create(this.injector);
    //attach it to the anuglar component tree
    this.appRef.attachView(panelviewcomponent.hostView);
    //get the dom reference
    var domElem = (panelviewcomponent.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
      //get the dom reference of the already created panel/modal from the saved reference of the panel instance 
      var panelElem = (instantiatedPanel.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
      panelElem.getElementsByTagName('div')[0].appendChild(domElem);
    return panelviewcomponent;
  }
  createPanel(panelToCreate: any, componentToAttach: any) {
    var panel = this.componetFactoryResolver
      .resolveComponentFactory(panelToCreate
      ).create(this.injector);

    //set the reference for use later
    (panel.instance as PanelEventInterface).panelInstance = panel;
    //destroy the inner view componet thats on the panel by ruunnin this function called when the panel has completely coksed
    (panel.instance as PanelEventInterface).closingComplete = (caller) => { this.purgePanel(caller) };
    this.appRef.attachView(panel.hostView);
    this.instantiantedPanels.push(panel.instance);

    var panelELE = (panel.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(panelELE);
    this.panelElement = panelELE;
    //set the reference to the panels innver view item used to destroy it later
    (panel.instance as PanelEventInterface).attachedComponentInstance = this.createPanelViewComponent(componentToAttach);
  }

  //the inner conent of the view
  createPanelViewComponent(viewComponent: any) {
    var panelviewcomponent = this.componetFactoryResolver
      .resolveComponentFactory(viewComponent)
      .create(this.injector);
    this.appRef.attachView(panelviewcomponent.hostView);
    var domElem = (panelviewcomponent.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    this.panelElement.getElementsByTagName('div')[0].appendChild(domElem);
    return panelviewcomponent;
  }
  //the calling panel inner view component reference to be destroyed from the panel on closing
  private purgePanel(caller: PanelEventInterface) {

    this.appRef.detachView(caller.attachedComponentInstance.hostView);
    caller.attachedComponentInstance.destroy();
    // this.appRef.detachView(caller.panelInstance.hostView);
    // caller.panelInstance.destroy();
  }


}
