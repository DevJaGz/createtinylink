import { Injectable, Signal, inject } from "@angular/core";
import { LinkModel } from "../data/model/link.model";
import { Link, LinkSearchParams } from "../interfaces/link.interface";
import { IDGeneratorService } from "./id-generator.service";
import { HOST } from "../constants/link.constant";
import { Observable } from "rxjs";

@Injectable({
   providedIn: 'root'
})
export abstract class LinkService {

   private readonly linkModel = inject(LinkModel);
   private readonly _IDGeneratorService = inject(IDGeneratorService);
   
   getLink(params: LinkSearchParams): Observable<Link | null> {
      return this.linkModel.getLink(params);
   }

   createLink(originalURL: string): Observable<Link | null> {
      const tinyId = this._IDGeneratorService.generateId(10);
      const tinyURL = `${HOST}/${tinyId}`
      const link: Link = {
         nClicks: 0,
         originalURL,
         tinyURL,
         createdAt: new Date().getTime(),
         tinyId
      }
      return this.linkModel.createLink(link);
   }
}