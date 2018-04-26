import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatProgressSpinnerModule
    ],
    declarations: []
})
export class MaterialModule { }
