import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-base-comp',
  templateUrl: './base-component.component.html',
})
export class BaseComponent {
  Save() {
    console.log('SAVE on BaseComponent');
  }
  Cancel() {
    console.log('Cancel on BaseComponent');
  }
}
