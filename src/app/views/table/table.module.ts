import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutes } from './table.routing';
import { RouterModule } from '@angular/router';
import { IgxGridModule, IgxButtonGroupModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollModule } from '../../directives/prevent-scroll.directive';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TableRoutes),
    FlexLayoutModule,
    IgxPreventDocumentScrollModule,
    FormsModule,
    IgxGridModule,
    IgxButtonGroupModule,
    MatIconModule,
  ],
})
export class TableModule {}
