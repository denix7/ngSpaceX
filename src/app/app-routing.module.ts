import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchesComponent} from './launches/launches.component'
import { patch } from 'webdriver-js-extender';
const routes: Routes = [//3configuramos rutas
  {
    path: '',
    component: LaunchesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
