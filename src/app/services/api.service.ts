import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class api {

  constructor(private http: HttpClient) {  }

  weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
  weatherParams = '&units=metric&APPID=7a03c26542c239ef43a3257fc4b285d2';

  fetchData(zipcode = '') {
    console.log(zipcode, 'i reached')
    const url = `${this.weatherAPI}${zipcode}${this.weatherParams}`;
    return this.http.get(url)
  }
}
