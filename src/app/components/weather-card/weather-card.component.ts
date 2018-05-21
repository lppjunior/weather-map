import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../model';

@Component({
    selector: 'app-weather-card',
    templateUrl: './weather-card.component.html',
    styleUrls: ['./weather-card.component.sass']
})
export class WeatherCardComponent implements OnInit {

    @Input() public data: Weather;

    public weatherStatus: string;

    constructor() {
    }

    ngOnInit() {
        if (this.data.weather <= 5) {
            this.weatherStatus = 'cold';
        } else if (this.data.weather <= 25) {
            this.weatherStatus = 'medium';
        } else {
            this.weatherStatus = 'hot';
        }
    }

}
