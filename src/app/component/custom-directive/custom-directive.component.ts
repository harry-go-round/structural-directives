import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {

  nums: number[]

  constructor() { }

  ngOnInit() {
    this.nums = Array.from(Array(20).keys())
  }

}
