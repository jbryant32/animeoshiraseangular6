import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.css']
})
export class WorkingComponent implements OnInit {
@Input()
loading:boolean =false;;
  constructor() { }

  ngOnInit() {
  }

}
