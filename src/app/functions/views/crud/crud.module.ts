import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [HomeComponent, FormComponent],
  imports: [
    CommonModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
