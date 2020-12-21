import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard/alarma'},
  {path: '**', component: NotpagefoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
