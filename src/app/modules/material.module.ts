import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatTableModule
} from "@angular/material";
import { OverlayContainer } from '@angular/cdk/overlay';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
})

export class CustomMaterialModule {
}