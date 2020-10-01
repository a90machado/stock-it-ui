import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class BaseModule { }
