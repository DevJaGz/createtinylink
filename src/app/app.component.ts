import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputButtonComponent } from './ui-elements/input-button/input-button.component';
import { NgModel } from '@angular/forms';
import { DataModule } from './data/data.module';
import { LinkService } from './services/link.service';
import { IDGeneratorService } from './services/id-generator.service';
import { HOST } from './constants/link.constant';
import { DisplayLinkComponent } from './ui-elements/display-link/display-link.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    InputButtonComponent,
    DisplayLinkComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'createtinylink';
  tinyURL = '';
  private readonly _linkService = inject(LinkService);


  createLink(input: NgModel): void {
    this._linkService.createLink(input.value).subscribe({
      next: (link) => {
        if (link) {
         this.tinyURL = link.tinyURL;
        }
      }
    });
  }

}
