import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-button',
  standalone: true,
  imports: [],
  templateUrl: './input-button.component.html',
  styles: ``
})
export class InputButtonComponent {

  @Input({required: true})
  buttonLabel = '';

  @Input()
  inputPlaceholder = '';

  @Input()
  inputClassStyles = '';
}
