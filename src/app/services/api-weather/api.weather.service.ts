import { Injectable } from '@angular/core';

import { HttpService } from '../http/http.service';
import { Weather } from '../../model';
import { WeatherInterface } from './api.weather.service.interfaces';

@Injectable()
export class APIWeatherService {

    constructor(
        private _httpService: HttpService
    ) { }

    public async getWeather(city: string, country: string): Promise<Weather> {
        // @todo Implementar API

        // [ # ] Nuuk/GL, Urubici/BR e Nairobi/KE
        // [   ] Temperatura deve ser exibidas em graus Celsius
        // [   ] Umidade deve ser exibida em percentual
        // [   ] Pressão deve ser exibida em hectoPascal
        // [   ] As condições climáticas devem ser atualizadas a cada 10 minutos
        // [   ] As condições climáticas devem ser cacheadas no front-end por 10 minutos

        const URL = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';
        const PARAMS = {
            q: city + ', ' + country,
            appid: 'b6907d289e10d714a6e88b30761fae22'
        };

        const STATUS = ['error', 'updated'];

        const response = await this._httpService.get<WeatherInterface>(URL, PARAMS);

        return new Weather({
            city: city,
            country: country,
            weather: Math.round(1 + Math.random() * 30),
            update: new Date(),
            humidy: 12,
            pressure: 11,
            featured: city === 'Nuuk',
            status: STATUS[Math.round(Math.random() * 1)]
        });
    }
}
