import { CommonModule } from '@angular/common';
import { Component, Renderer2, inject } from '@angular/core';
import { InputButtonComponent } from '../../ui-elements/input-button/input-button.component';
import { DisplayLinkComponent } from '../../ui-elements/display-link/display-link.component';
import { LinkService } from '../../services/link.service';
import { NgModel } from '@angular/forms';
import { of, switchMap } from 'rxjs';

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
export class CreateComponent  {

  tinyURL = '';
  private readonly _linkService = inject(LinkService);
  private readonly _renderer = inject(Renderer2);

  showBlockUI = false;

  createLink(input: NgModel): void {
    this._handleBlockUI(true);
    const originalURL = input.value;
    this._linkService.getLink({
      originalURL
    }).pipe(switchMap((link) => {
      if (link){
        return of(link);
      }
      return  this._linkService.createLink(originalURL)
    }))
    .subscribe({
      next: (link) => {
        if (link) {
          this._handleBlockUI(false);
          this.tinyURL = link.tinyURL;
        }
      }
    });
  }

  _handleBlockUI(value: boolean): void {
    this.showBlockUI = value;
    if (value){
      this._renderer.addClass(document.body, 'loading');
      return;
    }
    this._renderer.removeClass(document.body, 'loading');
  }

  cleanCopyMessage(): void {
    this.tinyURL = '';
  }
}
