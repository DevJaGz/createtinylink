import { Injectable, Signal, inject } from "@angular/core";
import { LinkModel } from "../data/model/link.model";
import { Link, LinkSearchParams } from "../interfaces/link.interface";

@Injectable({
   providedIn: 'root'
})
export abstract class LinkService {

   private readonly linkModel = inject(LinkModel);

   getLink(params: LinkSearchParams): Signal<Link> {
      return this.linkModel.getLink(params);
   }

   createLink(link: Link): Signal<boolean> {
      return this.linkModel.createLink(link);
   }
}