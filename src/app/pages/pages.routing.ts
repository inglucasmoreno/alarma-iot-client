import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { AlarmaComponent } from './alarma/alarma.component';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: 'alarma', canActivate: [AuthGuard] , component: AlarmaComponent },
            { path: 'usuarios', canActivate: [AuthGuard] , component: UsuariosComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}
