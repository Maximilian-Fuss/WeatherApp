import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  url='http://api.openweathermap.org/data/2.5/';
  apiKey='1ecc61fedf344679b2c1f1ff28396a98';


  constructor(private http: HttpClient) { }
  searchData(city: string): Observable<any>{
    return this.http.get(`${this.url}weather?q=${city}&units=metric&appid=${this.apiKey}`)
  }
  search5day(id): Observable<any>{
    return this.http.get(`${this.url}forecast?id=${id}&units=metric&appid=${this.apiKey}`)
  }
  

}
