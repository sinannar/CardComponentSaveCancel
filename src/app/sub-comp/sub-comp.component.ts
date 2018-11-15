import { Component, ViewChild } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';
@Component({
  selector: 'app-sub-comp',
  templateUrl: './sub-comp.component.html',
})
export class SubComponent extends BaseComponent {
  Save() {
    console.log('SAVE on SubComponent');
  }
  Cancel() {
    console.log('Cancel on SubComponent');
  }
}
