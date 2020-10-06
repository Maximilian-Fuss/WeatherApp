export class WeatherData{
    public cityName: string
    public description: string
    public currentTemp: number
    public minTemp: number
    public maxTemp: number
    public icon: string
    public id: string
    public date: string;

  
}

export class WeatherDataOneDayDetails
{
    public hour : Array<WeatherData> = new Array<WeatherData>();

}

export class WeatherDataDetails{
    public cityName:string
    public day : Array<WeatherDataOneDayDetails> = new Array<WeatherDataOneDayDetails>();
    
}