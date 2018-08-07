import { Component } from '@angular/core';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anime Oshirase';

  private isEmptyValue(value: any): boolean {
    return isEmpty(value);
  }
}
