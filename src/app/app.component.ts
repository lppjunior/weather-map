import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import CONFIG from 'src/config'

import { Weather } from './model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public weatherList: Array<Weather>;
    public TITLE: string;

    constructor(
            private _titleService: Title
    ) {
        this.TITLE = CONFIG.TITLE;
        this._titleService.setTitle(this.TITLE);
        this.weatherList = new Array<Weather>()
    }

    ngOnInit() {
        this.weatherList = new Array<Weather>();
        CONFIG.API.default_city.forEach((element: Weather) => {
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
