import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/meteo.model';
import { MeteoService } from 'src/app/share/meteo.service';

@Component({
  selector: 'app-meteo-attuale',
  templateUrl: './meteo-attuale.component.html',
  styleUrls: ['./meteo-attuale.component.css']
})
export class MeteoAttualeComponent implements OnInit{
  constructor(private http: HttpClient, private meteoService:MeteoService) { }
  ngOnInit(): void {

  }


  cityData?:City
  searchQuery:string = "Milan"




searchTempByCity(){
  this.meteoService.getCityByName(this.searchQuery).subscribe(cdata => {
    this.cityData = cdata;
  });

}


}
