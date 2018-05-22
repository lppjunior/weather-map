export interface WeatherInterface {
    id?: number;
    city?: string;
    country?: string;
    weather?: number;
    update?: Date;
    humidity?: number;
    pressure?: number;
    featured?: boolean;
    status?: string;
    cache?: Date;
}

export default class Weather {
    public id?: number;
    public city?: string;
    public country?: string;
    public weather?: number;
    public update?: Date;
    public humidity?: number;
    public pressure?: number;
    public featured?: boolean;
    public status?: string;
    public cache?: Date;

    constructor(json: WeatherInterface) {
        this.id = json.id;
        this.city = json.city;
        this.country = json.country;
        this.weather = json.weather;
        this.update = json.update;
        this.humidity = json.humidity;
        this.pressure = json.pressure;
        this.featured = json.featured;
        this.status = json.status;
        this.cache = json.cache;
    }
}
