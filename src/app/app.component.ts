import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputButtonComponent } from './ui-elements/input-button/input-button.component';

import { DisplayLinkComponent } from './ui-elements/display-link/display-link.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,

  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'createtinylink';
  

}
