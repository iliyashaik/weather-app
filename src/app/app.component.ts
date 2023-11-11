import { Component } from '@angular/core';
import {api} from './services/api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather-Desktop-App';

  constructor(private apiService: api) { }

  zipcode: string = '';
  temparature: Number = 0;
  country: string = '';
  cityName: string = '';
  mintemparature: Number = 0;
  maxtemparature: Number = 0;
  humidity: Number = 0;
  feelslike: string = '';

  getData(){
    this.apiService.fetchData(this.zipcode).subscribe((response: any) => {
      console.log(response, 'response')
      this.temparature = response.main.temp;
      this.country = response.sys.country;
      this.cityName = response.name;
      this.maxtemparature = response.main.temp_max;
      this.mintemparature = response.main.temp_min;
      this.humidity = response.main.humidity
      this.feelslike= response.weather[0].description;
    });

  }
}
