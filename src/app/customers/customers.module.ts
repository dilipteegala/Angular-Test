import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CustomersListComponent }  from './customers-list/customers-list.component';
import { CustomersComponent } from '../customers/customers.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { from } from 'rxjs';
@NgModule({
  imports:      [ CommonModule,SharedModule,FormsModule ],
  declarations: [ CustomersListComponent, CustomersComponent,FilterTextboxComponent ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }