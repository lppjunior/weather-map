import { NgModule } from '@angular/core';

import {
    APIWeatherService,
    HttpService
} from '.';

@NgModule({
    providers: [
        APIWeatherService,
        HttpService
    ]
})
export class ServiceModule { }
