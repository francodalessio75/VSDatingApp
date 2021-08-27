import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider'
import { MatSelectModule } from '@angular/material/select'



@NgModule({
  declarations: [],
  imports: [
    //MatButtonModule,
    //MatButtonToggleModule,
    //MatIconModule,
    //MatToolbarModule,
    //CommonModule,
    //MatListModule,
    //MatMenuModule,
    //MatInputModule,
    //MatDividerModule,
    //MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule
  ]
})
export class MatModule { }
