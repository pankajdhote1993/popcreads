import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
declare function loadCarousel():any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  banres:any;
  bannerlist:any;
  trendingres:any;
  trendinglist:any;
  newseriesres:any;
  newserieslist:any;
  result:any;
  upcomingMovieList:any;

  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
    this.getBannerList();
    this.getTrendingComicList();
    this.newSeriesComicList();
  }

  getBannerList(){
      this.homeservice.getBannerData().subscribe(bannerresult => {
          this.banres=bannerresult;
          this.bannerlist = this.banres.data;
          console.log(this.bannerlist);
      });
  }

  getTrendingComicList(){
    this.homeservice.trendingComicList().subscribe(trendinresult => {
      this.trendingres = trendinresult;
      this.trendinglist = this.trendingres.data;
      console.log(this.trendinglist);
    })
  }

  newSeriesComicList(){
    this.homeservice.newSeriesComicList().subscribe(newseriesresult => {
      this.newseriesres = newseriesresult;
      this.newserieslist = this.newseriesres.data;
      console.log(this.newserieslist);
    })
  }

  comicDetails(id:any, title:any){

  }

  movieDetails(id:any, title:any){

  }

  public loadScript() {
    setTimeout(function(){
      loadCarousel();
    }, 1000);
       
  }
  ngAfterViewInit() {
    this.loadScript();
  }

}
