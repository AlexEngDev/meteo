export class MeteoHourly {
  cod: string
  message: number
  cnt: number
  list: List[]
  city: City
}

export class List {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  sys: Sys
  dt_txt: string
  rain?: Rain

  constructor(dt_txt: string, main:Main){
    this.dt_txt = dt_txt;
    this.main = main;
  }
}


export class Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export class Weather {
  id: number
  main: string
  description: string
  icon: string
}

export class Clouds {
  all: number
}

export class Wind {
  speed: number
  deg: number
  gust: number
}

export class Sys {
  pod: string
}

export class Rain {
  "3h": number
}

export class City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface Coord {
  lat: number
  lon: number
}
