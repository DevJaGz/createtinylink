import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InputButtonComponent } from '../../ui-elements/input-button/input-button.component';
import { DisplayLinkComponent } from '../../ui-elements/display-link/display-link.component';
import { LinkService } from '../../services/link.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    InputButtonComponent,
    DisplayLinkComponent
  ],
  templateUrl: './create.component.html',
  styles: ``
})
export class CreateComponent {
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
