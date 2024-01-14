import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputButtonComponent } from './ui-elements/input-button/input-button.component';
import { NgModel } from '@angular/forms';
import { DataModule } from './data/data.module';
import { LinkService } from './services/link.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    InputButtonComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'createtinylink';

  private readonly LinkService = inject(LinkService);

  createLink(input: NgModel): void {
    console.log(input)
  }

}
