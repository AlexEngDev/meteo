import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/meteo.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

 //private apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
 private apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather?q="
 private apiKey = "{apiKey}"
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





}
