import { Injectable, inject } from '@angular/core';
import { LinkModel } from '../model/link.model';
import { Link, LinkSearchParams } from '../../interfaces/link.interface';
import { Firestore, addDoc, collection, getDocs, limit, query, where } from '@angular/fire/firestore';
import { Observable, filter, from, map } from 'rxjs';

@Injectable()
export class LinkFirestore implements LinkModel {


    private readonly _collectionName = 'links';
    private readonly _firestore: Firestore = inject(Firestore);
    private readonly _collectionRef = collection(this._firestore, this._collectionName);


    getLink({ tinyId }: LinkSearchParams): Observable<Link | null> {
        const docQuery = query(this._collectionRef, where('tinyId', '==', tinyId), limit(1));
        return from(getDocs(docQuery)).pipe( map( (snapshot) => {
            const id = snapshot.docs[0]?.id;
            const data = snapshot.docs[0]?.data();
            if (!id || !data) return null;
			return {
				...data,
				id,
			} as Link            
        }) )
    }

    createLink(link: Link): Observable<Link | null> {
        const documentRef = addDoc(this._collectionRef, link);
        return from(documentRef).pipe(map( v => v ? link: null))
    }
 
    
}