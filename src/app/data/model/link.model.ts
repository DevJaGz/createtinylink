import { Signal } from "@angular/core";
import { Link, LinkSearchParams } from "../../interfaces/link.interface";

export abstract class LinkModel {
   abstract getLink(params: LinkSearchParams): Signal<Link>;
   abstract createLink(link: Link): Signal<boolean>;
}