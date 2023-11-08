import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TurnPageComponent } from './pages/turn-page/turn-page.component';
import { TurnListClientComponent } from './pages/turn-list-client/turn-list-client.component';
import { TurnListDateComponent } from './pages/turn-list-date/turn-list-date.component';

const routes: Routes = [
  {
    path: '',
    component: TurnPageComponent,
    children: [
      {
        path: 'list',
        component: TurnListClientComponent,
      },
      {
        path: 'date',
        component: TurnListDateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurnRoutingModule {}
