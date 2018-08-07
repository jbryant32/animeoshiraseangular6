import { Directive, HostListener, Output } from "@angular/core";
import { EventEmitter } from "events";

@Directive({
  selector: "[appHammertime]"
})
export class HammertimeDirective {
  @Output() doubleTap = new EventEmitter();
  constructor() {}
  @HostListener("", ["$event"])
  onTap(e) {}
}
