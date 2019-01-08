import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent  {

  movies: any[] = [];
  films: any = {};

  constructor( public moviesService: MoviesService,
              private activatedRoute: ActivatedRoute ) {

    this.moviesService.getpopular()
      .subscribe ( (data: any) => {
        console.log(data);
        this.movies = data;
    });

    this.activatedRoute.params.subscribe ( params => {
      console.log(params['id']);

      this.getMovie( params['id']);
    });
  }
  
  getMovie(id: string) {
    console.log(id);
    this.moviesService.getMovie( id )
      .subscribe ( movies => {
        this.films = movies;
    });
  }
}
