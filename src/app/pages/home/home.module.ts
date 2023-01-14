import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ HomeListComponent, ],
  exports:      [HomeListComponent, ],
  imports:      [ 
    CommonModule, 
    SharedModule,
  ]
})
export class HomeModule { }
