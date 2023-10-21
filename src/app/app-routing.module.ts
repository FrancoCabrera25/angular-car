import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    // canActivate: [publicGuardCanActivate],
    // canMatch: [publicGuardCanMatch]
  },

  {
    path: 'turn',
    loadChildren: () => import('./turn/turn.module').then((m) => m.TurnModule),
    // canActivate: [publicGuardCanActivate],
    // canMatch: [publicGuardCanMatch]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
