import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchesComponent} from './launches/launches.component'
import { patch } from 'webdriver-js-extender';
import { LatestLaunchComponentComponent } from './latest-launch-component/latest-launch-component.component';
const routes: Routes = [//3configuramos rutas
  {
    path: '',
    component: LaunchesComponent
  },
  {
    path: 'latest',//pestaña
    component: LatestLaunchComponentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
