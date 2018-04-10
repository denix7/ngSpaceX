import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches.component';
import { SpacexService } from './spacex.service';
import { HttpClientModule } from '@angular/common/http';
import { LatestLaunchComponentComponent } from './latest-launch-component/latest-launch-component.component';



@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    LatestLaunchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpacexService],//configuramos el provider , ya podemos utilizar el servicio desde el componente
  bootstrap: [AppComponent]
})
export class AppModule { }
