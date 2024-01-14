import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-link',
  standalone: true,
  imports: [],
  templateUrl: './display-link.component.html',
  styles: ``
})
export class DisplayLinkComponent {
  @Input()
  url: string = '12343242352454';

  showCopyMessage= false;
  private _setTiemoutRef!: ReturnType<typeof setTimeout>

  onCopyLink(): void {
    navigator.clipboard.writeText(this.url).then(
      ( ) => this._showCopyMessage()
    )
  }

  private _showCopyMessage(): void {
    this.showCopyMessage = true;
    if (this._setTiemoutRef) {
      clearTimeout(this._setTiemoutRef);
    }
    this._setTiemoutRef = setTimeout(() => {
      this.showCopyMessage = false;
    },2_000);
  }
}
