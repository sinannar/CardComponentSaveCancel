import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';
import { SubComponent } from './sub-comp/sub-comp.component';
import { SubTwoComponent } from './sub-comp-two/sub-comp-two.component';
import { BaseComponent } from './base-component/base-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    CardComponent,
    SubComponent,
    SubTwoComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
