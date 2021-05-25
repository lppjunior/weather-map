import { Injectable } from '@angular/core';

import { HttpService } from '../http/http.service';
import { Weather } from '../../model';
import { WeatherResponseInterface } from './api.weather.service.interfaces';
import CONFIG from 'src/config'

const localStorage = window.localStorage

@Injectable()
export class APIWeatherService {
    private url: string;
    private appId: string;
    private cacheTime: number;

    constructor(
        private _httpService: HttpService,
    ) {
        const { API } = CONFIG;

        this.url = API.app_url;
        this.appId = API.app_id;
        this.cacheTime = API.cache_time;
    }

    public async getWeather(data: Weather): Promise<Weather> {
        const PARAMS = {
            appid: this.appId,
            id: data.id,
            units: 'metric'
        };

        const cache = JSON.parse(localStorage.getItem('weather_data_' + data.id) || '');

        if (cache) {
            const time_maturity = (new Date(cache.cache)).getTime() + this.cacheTime;
            const time_current = (new Date()).getTime();

            if (time_maturity - time_current > 0) {
                data.weather  = Math.round(cache.weather);
                data.pressure = Math.round(cache.pressure);
                data.humidity = Math.round(cache.humidity);
                data.update = new Date(cache.update);

                return Promise.resolve(data);
            }
        }

        const req = this._httpService.get<WeatherResponseInterface>(this.url, PARAMS);
        try {
            const response = <WeatherResponseInterface> await req.toPromise();

            data.weather  = Math.round(response.main.temp);
            data.pressure = Math.round(response.main.pressure);
            data.humidity = Math.round(response.main.humidity);
            data.update = new Date(response.dt * 1000);
            data.cache = new Date();

            localStorage.setItem('weather_data_' + data.id, JSON.stringify(data));

        } catch (e) {
            throw e;
        }

        return data;
    }
}
