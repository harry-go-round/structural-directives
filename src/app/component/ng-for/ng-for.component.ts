import { Component, OnInit } from '@angular/core';

const before = [
  {
    id: 1,
    name: 'a'
  },
  {
    id: 2,
    name: 'b'
  },
  {
    id: 3,
    name: 'c'
  }
]
const after = [
  {
    id: 1,
    name: 'a'
  },
  {
    id: 2,
    name: 'b'
  },
  {
    id: 3,
    name: 'c'
  },
  {
    id: 4,
    name: 'd'
  }
]

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  array: number[]
  tracks1: {id: number, name: string}[]
  tracks2: {id: number, name: string}[]
  tracks3: {id: number, name: string}[]
  
  constructor() { }

  ngOnInit() {
    this.array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    this.tracks1 = before
    this.tracks2 = before
    this.tracks3 = [
      {
        id: 1,
        name: 'a'
      },
      {
        id: 2,
        name: 'b'
      },
      {
        id: 3,
        name: 'c'
      }
    ]
  }

  push1() {
    this.tracks1 = after
  }
  pop1() {
    this.tracks1 = before
  }
  push2() {
    this.tracks2 = after
  }
  pop2() {
    this.tracks2 = before
  }
  trackFn(index: any, num: any) {
    return num.id
  }
  push3() {
    const maxReducer = (a, b) => a.id > b.id ? a.id : b.id
    const num = this.tracks3.reduce(maxReducer, 1)
    this.tracks3.push({
      id: num + 1,
      name: String.fromCharCode(num + 97)
    })
  }
  pop3() {
    this.tracks3.pop()
  }
  shift3() {
    this.tracks3.shift()
  }
}
