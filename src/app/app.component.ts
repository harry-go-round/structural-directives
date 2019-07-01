import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  components: {[key:number]: string}
  keys: string[]
  value: number

  constructor() {

  }

  ngOnInit() {
    this.components = {
      1: 'ngIf',
      2: 'ngFor',
      3: 'ngSwitch',
      4: 'ngTemplateOutlet',
      5: 'ngComponentOutlet',
      6: 'custom-directive'
    }
    this.keys = Object.keys(this.components)
  }

}
