import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any[] = [];

  constructor( public moviesService: MoviesService) {
    this.moviesService.getpopular()
      .subscribe ( (data: any) => {
        console.log(data);
        this.movies = data;
      });
  }

  ngOnInit() {
  }

}
