import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatTableModule, 
  MatToolbarModule, 
  MatIconModule,
  MatInputModule 
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatTableModule, MatToolbarModule, MatIconModule, MatInputModule],
  imports: [MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatTableModule, MatIconModule,MatInputModule],
})
export class AngularMaterialModule { }
