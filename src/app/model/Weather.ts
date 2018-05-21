export interface WeatherInterface {
    city?: string;
    country?: string;
    weather?: number;
    update?: Date;
    humidy?: number;
    pressure?: number;
    featured?: boolean;
    status?: string;
}

export default class Weather {
    public city?: string;
    public country?: string;
    public weather?: number;
    public update?: Date;
    public humidy?: number;
    public pressure?: number;
    public featured?: boolean;
    public status?: string;

    constructor(json: WeatherInterface) {
        this.city = json.city;
        this.country = json.country;
        this.weather = json.weather;
        this.update = json.update;
        this.humidy = json.humidy;
        this.pressure = json.pressure;
        this.featured = json.featured;
        this.status = json.status;
    }
}
