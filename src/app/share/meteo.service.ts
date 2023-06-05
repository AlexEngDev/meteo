import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/meteo.model';
import { Observable } from 'rxjs/internal/Observable';
import { List, MeteoHourly } from '../models/meteoHourly.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

 //private apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
 //private apiUrlWeatherHourly = "api.openweathermap.org/data/2.5/forecast?q=Milan&appid=85124bf88ee3f736704131367529ca62"
 private apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather?q="
 private apiUrlWeatherHourly = "https://api.openweathermap.org/data/2.5/forecast?q="
 private apiKey = "85124bf88ee3f736704131367529ca62"
/*
 private options = {
	headers: new HttpHeaders({
		"appid": this.apiKey
	})
 }
*/

 getCityByName(cityName: string): Observable<City> {
	let url = `${this.apiBaseUrl}${cityName}&appid=`
  //console.log(url+this.apiKey);
	return this.http.get<City>(url + this.apiKey + "&units=metric");
	}


getCityWeatherHourlycityName(cityName: string): Observable<MeteoHourly> {
  let url = `${this.apiUrlWeatherHourly}${cityName}&appid=`
  console.log(url + this.apiKey);

	return this.http.get<MeteoHourly>(url + this.apiKey + `&units=metric`);
}


refactorGetCityWeatherHourlycityName(cityName: string): Observable<List[]> {
  let url = `${this.apiUrlWeatherHourly}${cityName}&appid=`

	return this.http.get<MeteoHourly>(url + this.apiKey + `&units=metric`).pipe(
    map(
      (response: MeteoHourly)=>{
        const lista: List[] = [];

        response.list.forEach(w => {
          let one_element = new List(
            w['dt_txt'],
            w['main']
          )
          lista.push(one_element);
        })
        return lista;
      }
    )
  )
  }
}
