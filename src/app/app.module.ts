import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NgIfComponent } from './component/ng-if/ng-if.component';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { NgSwitchComponent } from './component/ng-switch/ng-switch.component';
import { NgTemplateOutletComponent } from './component/ng-template-outlet/ng-template-outlet.component';
import { NgComponentOutletComponent } from './component/ng-component-outlet/ng-component-outlet.component';
import { FirstComponent } from './component/ng-component-outlet/first/first.component';
import { SecondComponent } from './component/ng-component-outlet/second/second.component';
import { ThirdComponent } from './component/ng-component-outlet/third/third.component';
import { PrimeNumberDirective } from './directive/prime-number.directive';
import { CustomDirectiveComponent } from './component/custom-directive/custom-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgTemplateOutletComponent,
    NgComponentOutletComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    PrimeNumberDirective,
    CustomDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ]
})
export class AppModule { }
