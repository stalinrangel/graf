import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SociosComponent } from './socios.component';
import { SociosAgregarComponent } from './socios-agregar/socios-agregar.component';
import { SociosVerComponent } from './socios-ver/socios-ver.component';
import { registrarComponent } from './registrar/registrar.component';

const routes: Routes = [{
  path: '',
  component: SociosComponent,
  children: [{
    path: 'agregar',
    component: SociosAgregarComponent,
  },{
    path: 'ver',
    component: SociosVerComponent,
  },{
    path: 'registrar',
    component: registrarComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SociosRoutingModule {

}

export const routedComponents = [
  SociosComponent,
  SociosAgregarComponent,
  SociosVerComponent,
  registrarComponent
];
