import {Rocket} from './rocket';

export interface Launch{//1
    launch_date_utc: string,
    rocket: Rocket; //el nombre se obtiene del objeto rocket
}

