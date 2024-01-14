import { Link, LinkSearchParams } from "../../interfaces/link.interface";
import { Observable } from "rxjs";

export abstract class LinkModel {
   abstract getLink(params: LinkSearchParams): Observable<Link | null>;
   abstract createLink(link: Link): Observable<Link | null>;
}