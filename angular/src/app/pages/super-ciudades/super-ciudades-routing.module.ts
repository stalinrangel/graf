import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperCiudadesComponent } from './super-ciudades.component';
import { SuperCiudadesVerComponent } from './super-ciudades-ver/super-ciudades-ver.component';
import { SuperCiudadesAgregarComponent } from './super-ciudades-agregar/super-ciudades-agregar.component';
import { SuperCiudadesTodasComponent } from './super-ciudades-todas/super-ciudades-todas.component';

const routes: Routes = [{
  path: '',
  component: SuperCiudadesComponent,
  children: [{
    path: 'ver',
    component: SuperCiudadesVerComponent,
  },{
    path: 'agregar',
    component: SuperCiudadesAgregarComponent,
  },{
    path: 'todas',
    component: SuperCiudadesTodasComponent,
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
export class SuperCiudadesRoutingModule {

}

export const routedComponents = [
  SuperCiudadesComponent,
  SuperCiudadesVerComponent,
  SuperCiudadesAgregarComponent,
  SuperCiudadesTodasComponent,
];
