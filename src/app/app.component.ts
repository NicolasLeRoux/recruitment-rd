import {
    Component,
    OnInit
} from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, share, switchMap } from 'rxjs/operators';

import { ShiftService } from './shift.service';
import { IShift } from './shift.interface';
import { TypeService } from './type.service';
import { IType } from './type.interface';
import { WorkforceService } from './workforce.service';
import { IWorkforce } from './workforce.interface';

interface IData {
    id?: number;
    name?: string;
    shift?: string;
    type?: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public data$: Observable<IData[]>;

    constructor (
        private shiftSrv: ShiftService,
        private typeSrv: TypeService,
        private workforceSrv: WorkforceService
    ) {}

    public ngOnInit() {
        const shift$: Observable<IShift[]> = this.shiftSrv.query();
        const type$: Observable<IType[]> = this.typeSrv.query();
        const workForce$: Observable<IWorkforce[]> = this.workforceSrv.query();

        this.data$ = workForce$
            .pipe(
                map((workforces: IWorkforce[]) => {
                    return workforces.map(workforce => {
                        return {
                            id: workforce.id,
                            name: workforce.name
                        } as IData;
                    });
                })
            );
    }
}
