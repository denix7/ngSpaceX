import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { SpacexService } from './components/spacex.service';
import { HttpClientModule } from '@angular/common/http';
import { LatestLaunchComponentComponent } from './components/latest-launch-component/latest-launch-component.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    LatestLaunchComponentComponent,
    HomeComponent,
    ContactComponent
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
