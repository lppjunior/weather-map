export interface WeatherResponseInterface {
    main: {
        pressure: number;
        humidity: number;
        temp: number;
    };
    dt: number;
}
