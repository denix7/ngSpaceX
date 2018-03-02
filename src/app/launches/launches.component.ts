import { Component, OnInit } from '@angular/core';
import {Launch} from '../model/launch';//importamos el launch

@Component({
  selector: 'asu-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  //5
  launches: Launch[]; 
  constructor() { }

  //inicializacion del componente
  ngOnInit() {
    this.launches = [//6launches necesita fecha y rocket
      {
        launch_date_utc: '2018-02-22T14:17:00Z',
        rocket: {
          rocket_id: 'Falcon 9',//es cadena 
          rocket_name: 'Falcon 9'
        }
      },
        {
          launch_date_utc: '2018-01-22T14:17:00Z',
          rocket: {
            rocket_id: 'Falcon 90',//es cadena 
            rocket_name: 'Falcon 90'
        }
      }
    ];
  }

}
