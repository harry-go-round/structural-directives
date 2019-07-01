import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  bools: { name: string, value: boolean }[]
  selected1: boolean
  selected2: boolean
  selected3: boolean

  constructor() { }

  ngOnInit() {
    this.bools = [
      {
        name: 'true',
        value: true
      },
      {
        name: 'false',
        value: false
      }
    ]
    this.selected1 = true
    this.selected2 = true
    this.selected3 = true
  }
}
