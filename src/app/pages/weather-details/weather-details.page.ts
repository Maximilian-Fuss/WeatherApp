import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherData, WeatherDataDetails, WeatherDataOneDayDetails } from 'src/app/models/weatherData.model';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private weatherService:WeatherService) { }

  weatherDataDetails: WeatherDataDetails = new WeatherDataDetails();

  ngOnInit() {
    let id=this.activatedRoute.snapshot.paramMap.get('id');
    this.weatherService.search5day(id).subscribe(
      res=>{
        this.weatherDataDetails.cityName=res.city.name;
        for(var i=0;i<res.list.length;i+=8)
        {
          var daydetails = new WeatherDataOneDayDetails();
          for(var j=0;j<8;j++)
          {
            var details = new WeatherData();
            details.currentTemp = Math.round(res.list[i+j].main.temp);
            details.icon = res.list[i+j].weather[0].icon;
            details.date = res.list[i+j].dt_txt.slice(11,16);
            daydetails.hour.push(details);
          }
          this.weatherDataDetails.day.push(daydetails);
        }
      }
    )
  
  }



}
