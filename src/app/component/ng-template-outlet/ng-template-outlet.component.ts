import { Component, OnInit } from '@angular/core';

interface tree {
  id: number
  name: string
  children?: tree[]
}

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.css']
})
export class NgTemplateOutletComponent implements OnInit {

  obj: { id: number, name: string }
  trees: tree[]

  constructor() { }

  ngOnInit() {
    this.obj = { id: 1, name: 'test' }
    this.trees = [
      {
        id: 1,
        name: 'upper1',
        children: [
          {
            id: 10,
            name: 'middle1-1',
            children: [
              {
                id: 100,
                name: 'lower1-1-1'
              },
              {
                id: 101,
                name: 'lower1-1-2'
              },
              {
                id: 102,
                name: 'lower1-1-3'
              }
            ]
          },
          {
            id: 11,
            name: 'middle1-2'
          }
        ]
      },
      {
        id: 2,
        name: 'upper2',
        children: [
          {
            id: 20,
            name: 'middle2-1',
            children: [
              {
                id: 200,
                name: 'lower2-1-1',
                children: [
                  {
                    id: 2000,
                    name: 'lowest2-1-1-1'
                  },
                  {
                    id: 2001,
                    name: 'lowest2-1-1-2'
                  }
                ]
              },
              {
                id: 201,
                name: 'lower2-1-2',
              }
            ]
          }
        ]
      }
    ]
  }

}
