//IMPLEMENTACION DEL SERVICIO
import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Launch } from './model/launch';//importamos nuestra clase interface Launch

@Injectable()
export class SpacexService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
   }
   //obtenemos la ruta de spaceX
   public getLaunches(): Observable <Launch[]>{
     return this.httpClient.get<Launch[]>('https://api.spacexdata.com/v2/launches');//obtenemos un array de lanzamientos del api de space
   }

   public getLatestLaunch(): Observable <Launch>{
    return this.httpClient.get<Launch>('https://api.spacexdata.com/v2/launches/latest');
   }
}
