import { Component, OnInit } from '@angular/core';
import {Launch} from '../model/launch';//importamos el launch
import { setTimeout } from 'timers';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'asu-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  //5
  launches: Launch[] = []; 
  spacex: SpacexService; 

  //Dependency Injections DI, no tenemos que crearlo sino usar en el componente 
  constructor(spacex: SpacexService) {//el constructor resive el servicio en su parametro
    this.spacex = spacex;
   }

  //inicializacion del componente
  ngOnInit() {
    this.spacex.getLaunches()//metodo que devuelve un ovservable
      .subscribe((res) => {
        this.launches = res;
      });
/*
    setTimeout(function(){
      this.launches = [];
    }, 500);
*/

    //setTimeout(() => this.launches = [], 10000);
  }

}
