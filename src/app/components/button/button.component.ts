import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent {
  @Output() press: EventEmitter<any> = new EventEmitter();

  onButtonClick(): void {
    this.press.emit();
  }
}
