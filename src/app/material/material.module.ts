import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatSnackBarModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatSnackBarModule
    ],
    declarations: []
})
export class MaterialModule { }
