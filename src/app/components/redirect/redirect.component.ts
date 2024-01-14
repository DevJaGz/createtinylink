import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styles: ``
})
export class RedirectComponent implements OnInit {
  private _activateRoute = inject(ActivatedRoute);
  private readonly _linkService = inject(LinkService);

  ngOnInit(): void {
    this._makeRedicect();
  }

  _makeRedicect(): void {
    const tinyId = this._activateRoute.snapshot.params['id'] as string;
    this._linkService.getLink({ tinyId }).subscribe({
      next: ( link ) => {
        if (link){
          window.location.href = link?.originalURL;
        }
      }
    })
  }
}
