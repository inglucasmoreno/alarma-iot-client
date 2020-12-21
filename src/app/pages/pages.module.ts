import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmaComponent } from './alarma/alarma.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from '../shared/shared.module';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AlarmaComponent,
    PagesComponent,
    UsuariosComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
