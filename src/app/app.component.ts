import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <app-recipe-list></app-recipe-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTestApp';
}
