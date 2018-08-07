export interface PanelEventInterface {
      name:string;
      panelInstance:any;
      attachedComponentInstance:any;
      reintialize();
      startPanelClosedEvent:Function;
      closingComplete:Function;
      
}
