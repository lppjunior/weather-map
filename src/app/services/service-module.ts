import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    APIWeatherService,
    ConfigService,
    HttpService
} from '.';

@NgModule({
    providers: [
        APIWeatherService,
        ConfigService,
        HttpService
    ]
})
export class ServiceModule { }
