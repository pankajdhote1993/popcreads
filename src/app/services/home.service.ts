import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getBannerData(){
   return this.http.get(`${environment.base_url}get_hero_banners`);
  }

  trendingComicList(){
    return this.http.get(`${environment.base_url}get_trending_comics_list?language=en`);
  }

  newSeriesComicList() {
    return this.http.get(`${environment.base_url}get_new_series_list?language=en`);
  } 
}
