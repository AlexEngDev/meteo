import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { List, MeteoHourly } from 'src/app/models/meteoHourly.model';
import { MeteoService } from 'src/app/share/meteo.service';

@Component({
  selector: 'app-meteo-previsioni',
  templateUrl: './meteo-previsioni.component.html',
  styleUrls: ['./meteo-previsioni.component.css']
})
export class MeteoPrevisioniComponent {
  constructor(private http: HttpClient, private meteoService:MeteoService) { }


  cityDataHourly?:MeteoHourly
  refactorCityDataHourly:List[]
  searchQuery:string = "Milan"

  cityDataHourlyNoDublicates:List[];


  searchTempHourlyByCity(){
    this.meteoService.getCityWeatherHourlycityName(this.searchQuery).subscribe(chdata => {
      this.cityDataHourly = chdata;
    });
 }

 searchTempHourlyByCityRefactor(){
  const data = this.meteoService.refactorGetCityWeatherHourlycityName(this.searchQuery).subscribe(chrdata => {
    this.refactorCityDataHourly = chrdata;
  });
}



}
