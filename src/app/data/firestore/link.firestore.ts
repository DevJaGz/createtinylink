import { Injectable, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LinkModel } from '../model/link.model';
import { Link, LinkSearchParams } from '../../interfaces/link.interface';
import { Firestore, addDoc, collection, doc } from '@angular/fire/firestore';
import { filter, from, map } from 'rxjs';

@Injectable()
export class LinkFirestore implements LinkModel {


    private readonly _collectionName = 'links';
    private readonly _firestore: Firestore = inject(Firestore);
    private readonly _collectionRef = collection(this._firestore, this._collectionName);


    getLink(params: LinkSearchParams): Signal<Link> {
        throw new Error('Method not implemented.');
    }

    createLink(link: Link): Signal<boolean> {
        const documentRef = addDoc(this._collectionRef, link);
        return toSignal(
            from(documentRef).pipe(map( v=> !!v))
        ) as Signal<boolean>
    }
 
    
}