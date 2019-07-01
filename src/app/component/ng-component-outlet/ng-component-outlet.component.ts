import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.css']
})
export class NgComponentOutletComponent implements OnInit, OnDestroy {

  comps = [ FirstComponent, SecondComponent, ThirdComponent]
  interval
  current = 0
  comp = FirstComponent

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.current = (this.current + 1) % this.comps.length
      this.comp = this.comps[this.current]
    }, 2000)
  }
  ngOnDestroy() {
    clearInterval(this.interval)
  }
}
