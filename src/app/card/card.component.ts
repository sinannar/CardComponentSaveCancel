import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @ViewChild('content') subcomponent: BaseComponent;
  @Output() save1Triggered: EventEmitter<any>;
  @Output() cancel1Triggered: EventEmitter<any>;

  Save1() {
    this.save1Triggered.emit();
  }
  Cancel1() {
    this.cancel1Triggered.emit();
  }
  Save2() {
    this.subcomponent.Save();
  }
  Cancel2() {
    this.subcomponent.Cancel();
  }
}
