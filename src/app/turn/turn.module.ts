import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnPageComponent } from './pages/turn-page/turn-page.component';
import { TurnRoutingModule } from './turn-routing.module';



@NgModule({
  declarations: [
    TurnPageComponent
  ],
  imports: [
    CommonModule,
    TurnRoutingModule
  ]
})
export class TurnModule { }
