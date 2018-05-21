import { Injectable } from '@angular/core';

// import { CONFIG } from './../../../app-config/config.json';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private _config: any;

    constructor() {
        this._config = {
            TITLE: 'Weather Now',
            API_CACHE_TIME: 600,
            DEFAULT_WEATHER: [
                { country: 'GL',  city: 'Nuuk' },
                { country: 'BR',  city: 'Urubici' },
                { country: 'KE',  city: 'Nairobi' }
            ]
        };
    }

    get(key: string): any {
        return this._config[key];
    }
}
