import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWorkforce } from './workforce.interface';

const URL = 'http://localhost:3000/workforce';

@Injectable()
export class WorkforceService {

    constructor(
        private http: HttpClient
    ) {}

    public query(): Observable<IWorkforce[]> {
        return this.http.get<IWorkforce[]>(URL);
    }
}
