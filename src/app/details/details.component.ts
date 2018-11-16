import { Component, ViewChild } from '@angular/core';
import { SubComponent } from '../sub-comp/sub-comp.component';
import { SubTwoComponent } from '../sub-comp-two/sub-comp-two.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  @ViewChild('sub1') sub1: SubComponent;
  @ViewChild('sub2') sub2: SubTwoComponent;

  save1Triggerred($event) {
    console.log('DetailsComponent ' + $event);
    if ($event === 'sub1') {
      this.sub1.Save();
    } else if ($event === 'sub2') {
      this.sub2.Save();
    }
  }

  cancel1Triggered($event) {
    console.log('DetailsComponent ' + $event);
    if ($event === 'sub1') {
      this.sub1.Cancel();
    } else if ($event === 'sub2') {
      this.sub2.Cancel();
    }
  }
}
