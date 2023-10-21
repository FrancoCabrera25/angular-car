import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TurnPageComponent } from './pages/turn-page/turn-page.component';

const routes: Routes = [
  {
    path: '',
    component: TurnPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnRoutingModule { }
