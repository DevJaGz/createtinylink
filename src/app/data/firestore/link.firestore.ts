import { Injectable, inject } from '@angular/core';
import { LinkModel } from '../model/link.model';
import { Link, LinkSearchParams } from '../../interfaces/link.interface';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Observable, filter, from, map } from 'rxjs';

@Injectable()
export class LinkFirestore implements LinkModel {


    private readonly _collectionName = 'links';
    private readonly _firestore: Firestore = inject(Firestore);
    private readonly _collectionRef = collection(this._firestore, this._collectionName);


    getLink(params: LinkSearchParams): Observable<Link | null> {
        throw new Error('Method not implemented.');
    }

    createLink(link: Link): Observable<Link | null> {
        const documentRef = addDoc(this._collectionRef, link);
        return from(documentRef).pipe(map( v => v ? link: null))
    }
 
    
}