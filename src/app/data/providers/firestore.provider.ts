import { Provider } from "@angular/core";
import { LinkFirestore } from "../firestore/link.firestore";
import { LinkModel } from "../model/link.model";

export const FIRESTORE_PROVIDERS: Provider[] = [
    LinkFirestore,
    {
        provide: LinkModel,
        useExisting: LinkFirestore
    }
]