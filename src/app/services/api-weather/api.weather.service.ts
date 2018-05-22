import { Injectable } from '@angular/core';

import { HttpService } from '../http/http.service';
import { Weather } from '../../model';
import { WeatherResponseInterface } from './api.weather.service.interfaces';
import { ConfigService } from '../config/config.service';

@Injectable()
export class APIWeatherService {
    private url: string;
    private appId: string;
    private cacheTime: number;

    constructor(
        private _httpService: HttpService,
        private _config: ConfigService
    ) {
        const API = this._config.get('API');

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

        const cache = JSON.parse(localStorage.getItem('weather_data_' + data.id));

        if (cache) {
            const time_maturity = (new Date(cache.cache)).getTime() + this.cacheTime;
            const time_current = (new Date()).getTime();

            if (time_maturity - time_current > 0) {
                return new Promise<Weather>((resolve, reject) => {
                    data.weather  = Math.round(cache.weather);
                    data.pressure = Math.round(cache.pressure);
                    data.humidity = Math.round(cache.humidity);
                    data.update = new Date(cache.update);

                    resolve(data);
                });
            }
        }

        const request = await this._httpService.get<WeatherResponseInterface>(this.url, PARAMS);
        return new Promise<Weather>((resolve, reject) => {
            request.subscribe((response: WeatherResponseInterface) => {
                data.weather  = Math.round(response.main.temp);
                data.pressure = Math.round(response.main.pressure);
                data.humidity = Math.round(response.main.humidity);
                data.update = new Date(response.dt * 1000);
                data.cache = new Date();

                localStorage.setItem('weather_data_' + data.id, JSON.stringify(data));

                resolve(data);
            }, (error: any) => {
                data.status = 'error';
                reject(data);
            });
        });
    }
}
