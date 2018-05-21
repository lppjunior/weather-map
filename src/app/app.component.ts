import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfigService } from './services/config/config.service';

import { Weather } from './model';
import { APIWeatherService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public weatherList: Array<Weather>;
    public TITLE: string;

    constructor(
            private _titleService: Title,
            private _API: APIWeatherService,
            private _config: ConfigService
    ) {
        this.TITLE = _config.get('TITLE');
        this._titleService.setTitle(this.TITLE);
    }

    ngOnInit() {
        this.weatherList = new Array<Weather>();
        this._config.get('DEFAULT_WEATHER').forEach(element => {
            this.weatherList.push(new Weather({
                city: element.city,
                country: element.country,
                status: 'loading'
            }));

            this.updateWeather(element.city, element.country);
        });
    }

    async updateWeather(city: string, country: string) {
        const weather = await this._API.getWeather(city, country);

        for (let i = 0; i < this.weatherList.length; i++) {
            if (weather.city === this.weatherList[i].city
                && weather.country === this.weatherList[i].country) {
                    this.weatherList[i] = weather;
            }
        }
    }
}
