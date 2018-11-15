import { Component, ViewChild } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-sub-comp-two',
  templateUrl: './sub-comp-two.component.html',
})
export class SubTwoComponent extends BaseComponent {
  Save() {
    console.log('SAVE on SubTwoComponent');
  }
  Cancel() {
    console.log('Cancel on SubTwoComponent');
  }

}
