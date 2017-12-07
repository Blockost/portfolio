/**
 * Convenient little module that aggregates all the
 * Material components used throughout the app
 */

import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: []
})
export class AngularMaterialModule { }
