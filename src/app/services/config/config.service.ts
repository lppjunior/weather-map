import { Injectable } from '@angular/core';

import { CONFIG } from './../../app.config';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    constructor() {
    }

    get(key: string): any {
        return CONFIG[key];
    }
}
