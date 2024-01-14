import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid'

@Injectable({providedIn: 'root'})
export class IDGeneratorService {
   

    generateId(size: number): string {
        return nanoid(size);
    }
    
}