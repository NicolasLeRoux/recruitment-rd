import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShift } from './shift.interface';

const URL = 'http://localhost:3000/shift';

@Injectable()
export class ShiftService {

    constructor(
        private http: HttpClient
    ) {}

    public query(): Observable<IShift[]> {
        return this.http.get<IShift[]>(URL);
    }
}
