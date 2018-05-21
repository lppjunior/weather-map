import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        WeatherCardComponent
    ],
    exports: [
        WeatherCardComponent
    ]
})
export class ComponentsModule { }
