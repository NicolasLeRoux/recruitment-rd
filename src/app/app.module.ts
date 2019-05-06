import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { ShiftService } from './shift.service';
import { TypeService } from './type.service';
import { WorkforceService } from './workforce.service';

@NgModule({
    declarations: [
    AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule
    ],
    providers: [
        ShiftService,
        TypeService,
        WorkforceService
    ],
    bootstrap: [AppComponent]
    })
export class AppModule { }
