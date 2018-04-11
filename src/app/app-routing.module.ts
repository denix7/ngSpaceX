import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchesComponent} from './components/launches/launches.component'
import { patch } from 'webdriver-js-extender';
import { LatestLaunchComponentComponent } from './components/latest-launch-component/latest-launch-component.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [//3configuramos rutas
  {
    path: '',
    component: LaunchesComponent
  },
  {
    path: 'latest',//pestaña
    component: LatestLaunchComponentComponent
  },
  {
    path: 'launches',//pestaña
    component: LaunchesComponent
  },
  {
    path: 'contact',//pestaña
    component: ContactComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
