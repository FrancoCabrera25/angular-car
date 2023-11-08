import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnPageComponent } from './pages/turn-page/turn-page.component';
import { TurnRoutingModule } from './turn-routing.module';
import { TurnListClientComponent } from './pages/turn-list-client/turn-list-client.component';
import { TurnListDateComponent } from './pages/turn-list-date/turn-list-date.component';
import { TurnTableComponent } from './components/turn-table/turn-table.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    TurnPageComponent,
    TurnListClientComponent,
    TurnListDateComponent,
    TurnTableComponent
  ],
  imports: [
    CommonModule,
    TurnRoutingModule,
    AngularMaterialModule
  ]
})
export class TurnModule { }
