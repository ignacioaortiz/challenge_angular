import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

const components = [DialogComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
})
export class SharedModule {}
