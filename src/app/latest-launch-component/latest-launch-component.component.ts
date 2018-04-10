import { Component, OnInit } from '@angular/core';
import {Launch} from '../model/launch';//importamos el launch
//import { setTimeout } from 'timers';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'asu-latest-launch-component',
  templateUrl: './latest-launch-component.component.html',
  styleUrls: ['./latest-launch-component.component.css']
})
export class LatestLaunchComponentComponent implements OnInit {
  launch: Launch;

  constructor(private spacex: SpacexService) {
   }
  
  ngOnInit() {
    this.spacex.getLatestLaunch()//metodo que devuelve un ovservable
      .subscribe((launch) => {
        this.launch = launch;
      });
  }

}
