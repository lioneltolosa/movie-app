import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  movies: any[] = [];

  constructor( public moviesService: MoviesService ) {
    this.moviesService.getpopular()
      .subscribe ( (data: any) => {
        console.log(data);
        this.movies = data;
    });
  }

  ngOnInit() {
  }

  getMovie(movie: any) {
    console.log(movie.id);
  }

}
