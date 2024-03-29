import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule, NgModel} from '@angular/forms';

@Component({
  selector: 'app-input-button',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
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

  @Output()
  createLink = new EventEmitter<NgModel>();

  @Output()
  changeValue = new EventEmitter<NgModel>();

  showClearButton = false;

  value: string | null = null;

  onCreateLink(input: NgModel): void {
    this.createLink.emit(input);
    this.showClearButton = true;
  }

  onChangeValue(): void {
    this.changeValue.emit();
    this.showClearButton = false;
  }

  onClearInput(input: NgModel): void {
    this.value = '';
    input.control.markAsPristine();
    this.changeValue.emit();
  }

}
