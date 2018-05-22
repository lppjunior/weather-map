import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../model';
import { APIWeatherService } from '../../services';

@Component({
    selector: 'app-weather-card',
    templateUrl: './weather-card.component.html',
    styleUrls: ['./weather-card.component.sass']
})
export class WeatherCardComponent implements OnInit {

    @Input() public data: Weather;

    public weatherStatus: string;

    constructor(
        private _API: APIWeatherService
    ) {}

    ngOnInit() {
        this.updateData();
    }

    async updateData() {
        this.data.status = 'loading';
        this.data = await this._API.getWeather(this.data);
        this.data.status = 'updated';

        if (this.data.weather <= 5) {
            this.weatherStatus = 'cold';
        } else if (this.data.weather <= 25) {
            this.weatherStatus = 'medium';
        } else {
            this.weatherStatus = 'hot';
        }
    }
}
