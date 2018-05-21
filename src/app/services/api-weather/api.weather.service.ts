import { Injectable } from '@angular/core';

import { HttpService } from '../http/http.service';
import { Weather } from '../../model';

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

        return new Weather({
            city: city,
            country: country,
            weather: 2,
            update: new Date(),
            humidy: 12,
            pressure: 11,
            featured: city === 'Nuuk',
            status: 'updated'
        });
    }
}
