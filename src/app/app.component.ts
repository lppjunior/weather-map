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
            private _config: ConfigService
    ) {
        this.TITLE = _config.get('TITLE');
        this._titleService.setTitle(this.TITLE);
    }

    ngOnInit() {
        this.weatherList = new Array<Weather>();
        this._config.get('API').default_city.forEach(element => {
            this.weatherList.push(new Weather({
                id: element.id,
                city: element.city,
                country: element.country,
                featured: element.featured,
                status: 'loading'
            }));
        });
    }
}
