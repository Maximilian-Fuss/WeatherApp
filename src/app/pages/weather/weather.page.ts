import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/models/weatherData.model';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  weatherData: WeatherData = new WeatherData();
  searchTerm='';
  name ='';
  currentDate: String;
  constructor(private weatherService: WeatherService ) { }

  ngOnInit() {
  }
  searchChanged() {
    this.weatherService.searchData(this.searchTerm).subscribe(
      res =>
      {
        this.weatherData.cityName = res.name;
        this.weatherData.description =res.weather[0].description;
        this.weatherData.currentTemp =res.main.temp;
        this.weatherData.maxTemp = res.main.temp_max;
        this.weatherData.minTemp = res.main.temp_min;
        this.weatherData.icon = res.weather[0].icon;
        this.weatherData.id = res.id;

      }


    )
    this.currentDate = new Date().toISOString();
    
  }


}
