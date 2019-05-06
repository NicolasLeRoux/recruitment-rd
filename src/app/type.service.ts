import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IType } from './type.interface';

const URL = 'http://localhost:3000/type';

@Injectable()
export class TypeService {

    constructor(
        private http: HttpClient
    ) {}

    public query(): Observable<IType[]> {
        return this.http.get<IType[]>(URL);
    }
}
